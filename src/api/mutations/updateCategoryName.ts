import { gql } from "@apollo/client";

export const UPDATE_CATEGORY_NAME = gql`
    mutation UpdateProductCategory(
        $updateProductCategoryId: Float!
        $productCategory: UpdateProductCategoryInput!
    ) {
        updateProductCategory(
            id: $updateProductCategoryId
            productCategory: $productCategory
        ) {
            name
            id
        }
    }
`;
