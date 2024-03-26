import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($authenticationInput: AuthenticationInput!) {
        login(authenticationInput: $authenticationInput) {
            accessToken
            refreshToken
        }
    }
`;
