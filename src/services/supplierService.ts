import { CREATE_SUPPLIER } from "@/api/mutations/createSupplier";
import { GET_SUPPLIERS } from "@/api/queries/getSuppliers";
import { ICreateSupplier, ISupplier } from "@/types/Supplier.types";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useGetSuppliers = () => {
    const [getSuppliers, { data, loading, error }] =
        useLazyQuery(GET_SUPPLIERS);

    const suppliers = data?.getSuppliers as ISupplier[];

    return { getSuppliers, data: suppliers, loading, error };
};

export const useCreateSupplier = () => {
    const [createSupplier, { data, loading, error }] =
        useMutation(CREATE_SUPPLIER);

    const createSupplierMutation = useCallback(
        async (createSupplierInfo: ICreateSupplier) => {
            await createSupplier({
                variables: { supplier: createSupplierInfo },
            });
        },
        [createSupplier],
    );

    return { createSupplier: createSupplierMutation, data, loading, error };
};
