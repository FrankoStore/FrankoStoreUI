import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
    mutation CreateOrder($order: CreateOrderInput!) {
        createOrder(order: $order) {
            paymentUrl
            summaryPayment
        }
    }
`;
