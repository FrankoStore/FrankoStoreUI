import { CREATE_PROCUMERENT } from "@/api/mutations/createProcurement";
import { GET_PROCUREMENTS } from "@/api/queries/getProcurements";
import { ICreateProcurementInformationInfo } from "@/types/Procurement.types";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useGetProcurements = () => {
    const [getProcurements, { data, loading, error }] =
        useLazyQuery(GET_PROCUREMENTS);

    throw new Error("ADD TYPE HERE");
    const procurements = data?.getProcrumentInformations as any[];
    return { data: procurements, getProcurements, loading, error };
};

export const createProcurement = () => {
    const [createProcurement, { loading, data, error }] =
        useMutation(CREATE_PROCUMERENT);

    const createProcurementMutation = useCallback(
        async (createProcurementInfo: ICreateProcurementInformationInfo) => {
            await createProcurement({
                variables: { procurementInformation: createProcurementInfo },
            });
        },
        [createProcurement],
    );

    return {
        createProcurement: createProcurementMutation,
        loading,
        data,
        error,
    };
};
