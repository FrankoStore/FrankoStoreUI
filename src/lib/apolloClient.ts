import { API_BASE_URL, URLS } from "./constants";
import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
    Observable,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { redirect } from "next/navigation";

const authMiddleware = new ApolloLink((operation, forward) => {
    const needAuthorization = !["Login", "Register"].includes(
        operation.operationName,
    );
    if (operation.operationName && needAuthorization)
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                authorization: `Bearer ${localStorage?.getItem("accessToken")?.replaceAll('"', "") || null}`,
            },
        }));

    return forward(operation);
});
const authErrorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                if (err.extensions && err.extensions.code === "UNAUTHORIZED") {
                    // If it's a 401 error, send a refresh mutation and retry the original operation
                    return new Observable((observer) => {
                        try {
                            // RefreshMutation()
                            const subscriber = {
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            };
                            forward(operation).subscribe(subscriber);
                        } catch {
                            (refreshError: Error) => {
                                observer.error(refreshError);
                                localStorage.removeItem("accessToken");
                                localStorage.removeItem("refreshToken");
                                redirect(URLS.HOME);
                            };
                        }
                    });
                }
            }
        }
    },
);

const httpLink = new HttpLink({ uri: `${API_BASE_URL}/graphql` });

export const createApolloClient = () => {
    return new ApolloClient({
        uri: `${API_BASE_URL}/graphql`,
        link: from([authMiddleware, httpLink]),
        cache: new InMemoryCache(),
    });
};
