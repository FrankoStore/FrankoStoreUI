import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts {
        getProducts {
            amount
            description
            height
            length
            name
            size
            retailPrice
            width
        }
    }
`;

export const GET_PRODUCTS_CARDS = gql`
    query GetProducts {
        getProducts {
            description
            name
            retailPrice
        }
    }
`;
