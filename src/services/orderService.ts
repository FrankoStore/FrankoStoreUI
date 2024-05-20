import { CREATE_ORDER } from "@/api/mutations/createOrder";
import { GET_SETTLEMENTS } from "@/api/queries/getSettlements";
import { GET_STREETS } from "@/api/queries/getStreets";
import { GET_WAREHOUSES } from "@/api/queries/getWarehouses";
import {
    ICreateOrderInput,
    ICreateOrderResponse,
    IGetStreetsInput,
    IGetWarehousesInput,
} from "@/types/Order.types";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useCallback } from "react";

export const useCreateorder = () => {
    const [createOrderMutation, { loading, data, error }] =
        useMutation(CREATE_ORDER);

    const createOrder = useCallback(
        async (orderData: ICreateOrderInput) => {
            try {
                const { data } = await createOrderMutation({
                    variables: { order: orderData },
                });
                const orderInfo = data.createOrder as ICreateOrderResponse;
                return orderInfo;
            } catch (_) {
                return error;
            }
        },
        [createOrderMutation],
    );

    return { createOrder, loading, data, error };
};

export const useGetSettlements = () => {
    const [getSettlementsQuery, { data, loading, error }] =
        useLazyQuery(GET_SETTLEMENTS);

    const getSettlements = useCallback(
        async (cityName: string) => {
            await getSettlementsQuery({
                variables: {
                    cityName,
                },
            });
        },
        [getSettlementsQuery],
    );

    return { getSettlements, data, loading, error };
};

export const useGetWarehouses = () => {
    const [getWarehousesQuery, { data, loading, error }] =
        useLazyQuery(GET_WAREHOUSES);

    const getWarehouses = useCallback(
        async (warehousesInput: IGetWarehousesInput) => {
            await getWarehousesQuery({
                variables: {
                    ...warehousesInput,
                },
            });
        },
        [getWarehousesQuery],
    );

    return { getWarehouses, data, loading, error };
};

export const useGetStreets = () => {
    const [getStreetsQuery, { data, loading, error }] =
        useLazyQuery(GET_STREETS);

    const getStreets = useCallback(
        async (getStreetsInput: IGetStreetsInput) => {
            await getStreetsQuery({
                variables: {
                    ...getStreetsInput,
                },
            });
        },
        [getStreetsQuery],
    );

    return { getStreets, data, loading, error };
};
