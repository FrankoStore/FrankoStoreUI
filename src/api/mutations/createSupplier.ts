import { gql } from "@apollo/client";

export const CREATE_SUPPLIER = gql`
    mutation CreateSupplier($supplier: CreateSupplierInput!) {
        createSupplier(supplier: $supplier) {
            id
            address
            phoneNumber
        }
    }
`;
