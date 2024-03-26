import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
    query GetUserData {
        getMysUser {
            email
            firstName
            lastName
            phone
            username
        }
    }
`;
