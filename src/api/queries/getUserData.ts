import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
    query GetMysUser {
        getMysUser {
            id
            roles {
                id
                name
            }
            firstName
            lastName
            email
            username
            phone
            dicountType {
                id
                name
                percentage
            }
        }
    }
`;
