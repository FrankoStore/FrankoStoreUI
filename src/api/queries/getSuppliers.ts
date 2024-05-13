import { gql } from "@apollo/client";

export const GET_SUPPLIERS = gql`
    query GetSuppliers {
        getSuppliers {
            id
            address
            companyName
            email
            phoneNumber
            website
        }
    }
`;
