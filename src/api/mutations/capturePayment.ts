import { gql } from "@apollo/client";

export const CAPTURE_PAYMENT = gql`
    mutation CapturePayment($orderId: Float!) {
        capturePayment(orderId: $orderId)
    }
`;
