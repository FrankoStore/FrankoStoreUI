import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetProductCategories {
        getProductCategories {
            name
            id
        }
    }
`;
