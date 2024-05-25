import { gql } from "@apollo/client";

export const GET_CITIES = gql`
    query Query($findString: String!) {
        getCities(findString: $findString)
    }
`;
