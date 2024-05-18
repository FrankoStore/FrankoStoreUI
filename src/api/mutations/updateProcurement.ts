import { gql } from "@apollo/client";

export const UPDATE_PROCUREMENT = gql`
    mutation UpdateProcurementInformation(
        $updateProcurementInformationId: Float!
        $procurementInformation: UpdateProcurementInformationInput!
    ) {
        updateProcurementInformation(
            id: $updateProcurementInformationId
            procurementInformation: $procurementInformation
        ) {
            id
        }
    }
`;
