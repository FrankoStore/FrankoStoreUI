import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation CreateProductCategory(
        $productCategory: CreateProductCategoryInput!
    ) {
        mutation Mutation($product: CreateProductInput!) {
            createProduct(product: $product) {
            name
        }
  }
    }
`;
