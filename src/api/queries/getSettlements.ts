import { gql } from "@apollo/client";

export const GET_SETTLEMENTS = gql`
    query Query($cityName: String!) {
        getSettlements(cityName: $cityName)
    }
`;
