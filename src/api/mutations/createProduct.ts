import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($product: CreateProductInput!) {
        createProduct(product: $product) {
            name
        }
    }
`;
