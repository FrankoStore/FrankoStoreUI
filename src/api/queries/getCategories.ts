import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetProductCategories($findOptions: FindOptionsProductCategoryInput) {
        getProductCategories(findOptions: $findOptions) {
            id
            name
        }
    }
`;
