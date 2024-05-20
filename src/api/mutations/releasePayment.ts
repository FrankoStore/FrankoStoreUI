import { gql } from "@apollo/client";

export const RELEASE_PAYMENT = gql`
    mutation ReleasePayment($orderId: Float!) {
        releasePayment(orderId: $orderId)
    }
`;
