import { gql } from "@apollo/client";

export const GET_CITIES_STREETS = gql`
    query Query($cityRef: String!, $findString: String!) {
        getCityStreets(cityRef: $cityRef, findString: $findString)
    }
`;
