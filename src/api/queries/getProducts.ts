import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts {
        getProducts {
            id
            amount
            description
            height
            length
            name
            size
            retailPrice
            categories {
                name
            }
            images {
                path
                fileName
            }
        }
    }
`;

export const GET_PRODUCTS_CARDS = gql`
    query GetProducts {
        getProducts {
            id
            name
            retailPrice
            images {
                path
                fileName
                id
            }
            categories {
                id
                name
            }
        }
    }
`;

export const GET_PRODUCTS_BY_OPTIONS = gql`
    query GetProducts($findOptions: FindOptionsProductInput) {
        getProducts(findOptions: $findOptions) {
            name
            amount
            description
            height
            id
            categories {
                id
                name
            }
            length
            retailPrice
            size
            width
            images {
                path
                fileName
                fileExtension
            }
        }
    }
`;
