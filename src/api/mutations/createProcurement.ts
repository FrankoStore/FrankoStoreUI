import { gql } from "@apollo/client";

export const CREATE_PROCUMERENT = gql`
    mutation CreateProcurementInformation(
        $procurementInformation: CreateProcurementInformationInput!
    ) {
        createProcurementInformation(
            procurementInformation: $procurementInformation
        ) {
            product {
                id
            }
            supplier {
                companyName
            }
            id
            purchasePrice
            description
        }
    }
`;
