"use client";

import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "@/lib/apolloClient";

interface ApolloClientProviderPropsType {
    children: React.ReactNode;
}

const client = createApolloClient();

export const ApolloClientProvider: React.FC<ApolloClientProviderPropsType> = (
    props,
) => {
    const { children } = props;

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
