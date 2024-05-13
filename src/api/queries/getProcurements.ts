import { gql } from "@apollo/client";

export const GET_PROCUREMENTS = gql`
    query GetProcrumentInformations {
        getProcrumentInformations {
            orderedDate
            amount
            description
            id
            orderedDate
            purchasePrice
        }
    }
`;
