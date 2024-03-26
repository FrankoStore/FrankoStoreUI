import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation Register($user: CreateUserInput!) {
        register(user: $user) {
            accessToken
            refreshToken
        }
    }
`;
