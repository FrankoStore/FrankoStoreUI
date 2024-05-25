import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
    query GetOrders($findOptions: FindOptionsOrderInput) {
        getOrders(findOptions: $findOptions) {
            createdAt
            deliveryAddress
            executor {
                id
                email
            }
            isPaid
            id
            summaryPayment
            status
            customer {
                email
                id
            }
            products {
                product {
                    id
                    images {
                        path
                        fileExtension
                    }
                }
            }
        }
    }
`;
