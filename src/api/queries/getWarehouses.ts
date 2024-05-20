import { gql } from "@apollo/client";

export const GET_WAREHOUSES = gql`
    query Query($cityName: String!, $limit: Float!, $streetName: String!) {
        getWarehouses(
            cityName: $cityName
            limit: $limit
            streetName: $streetName
        )
    }
`;
