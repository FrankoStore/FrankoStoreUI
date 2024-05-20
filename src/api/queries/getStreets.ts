import { gql } from "@apollo/client";

export const GET_STREETS = gql`
    query Query($limit: Float!, $settlementRef: String!, $streetName: String!) {
        getStreets(
            limit: $limit
            settlementRef: $settlementRef
            streetName: $streetName
        )
    }
`;
