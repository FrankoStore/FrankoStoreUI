import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
    mutation UpdateProduct(
        $updateProductId: Float!
        $product: UpdateProductInput!
    ) {
        updateProduct(id: $updateProductId, product: $product) {
            name
            amount
            categories {
                name
            }
            description
            height
            images {
                id
                path
                fileName
            }
            length
            retailPrice
            size
            width
        }
    }
`;
