import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($product: UpdateProductInput!, $updateProductId: Float!) {
        updateProduct(product: $product, id: $updateProductId) {
            name
            amount
            categories {
            name
            }
            description
            discountType {
            
            }
            height
            images {
            
            }
            length
            retailPrice
            size
            width
        }
    }
`;
