import { API_BASE_URL } from "./constants";
import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    from,
} from "@apollo/client";

const authMiddleware = new ApolloLink((operation, forward) => {
    const needAuthorization = !["Login", "Register"].includes(
        operation.operationName,
    );
    if (operation.operationName && needAuthorization)
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                authorization: `Bearer ${localStorage.getItem("accessToken") || null}`,
            },
        }));

    return forward(operation);
});

const httpLink = new HttpLink({ uri: `${API_BASE_URL}/graphql` });

export const createApolloClient = () => {
    return new ApolloClient({
        // ssrMode: true,
        uri: `${API_BASE_URL}/graphql`,
        link: from([authMiddleware, httpLink]),
        cache: new InMemoryCache(),
    });
};
