import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($product: CreateProductInput!) {
        createProduct(product: $product) {
            amount
            description
            height
            length
            name
            retailPrice
            size
            width
            categories {
                name
            }
            images {
                fileName
                path
            }
            id
        }
    }
`;
