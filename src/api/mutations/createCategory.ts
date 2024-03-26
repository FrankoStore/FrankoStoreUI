import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
    mutation CreateProductCategory(
        $productCategory: CreateProductCategoryInput!
    ) {
        createProductCategory(productCategory: $productCategory) {
            name
            id
        }
    }
`;
