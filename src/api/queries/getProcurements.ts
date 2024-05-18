import { gql } from "@apollo/client";

export const GET_PROCUREMENTS = gql`
    query GetProcrumentInformations {
        getProcrumentInformations {
            orderedDate
            amount
            description
            id
            purchasePrice
            product {
                id
                name
            }
            supplier {
                id
                companyName
            }
        }
    }
`;
