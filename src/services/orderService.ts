import { CREATE_ORDER } from "@/api/mutations/createOrder";
import { GET_CITIES } from "@/api/queries/getCities";
import { GET_CITIES_STREETS } from "@/api/queries/getCitiesStreets";
import { GET_ORDERS } from "@/api/queries/getOrders";
import { GET_SETTLEMENTS } from "@/api/queries/getSettlements";
import { GET_STREETS } from "@/api/queries/getStreets";
import { GET_WAREHOUSES } from "@/api/queries/getWarehouses";
import {
    ICreateOrderInput,
    ICreateOrderResponse,
    IGetOrdersOptions,
    IGetStreetsInput,
    IGetWarehousesInput,
    IOrder,
} from "@/types/Order.types";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useCreateorder = () => {
    const [createOrderMutation, { loading, data, error }] =
        useMutation(CREATE_ORDER);

    const createOrder = useCallback(
        (orderData: ICreateOrderInput) => {
            createOrderMutation({
                variables: { order: orderData },
            });
        },
        [createOrderMutation],
    );

    const paymentData = data?.createOrder as ICreateOrderResponse | undefined;

    return { createOrder, loading, data: paymentData, error };
};

export const useGetOrders = () => {
    const [getOrders, { data, error, loading }] = useLazyQuery(GET_ORDERS);

    const getOrdersWithOptions = useCallback(
        (options: IGetOrdersOptions) => {
            getOrders({
                variables: {
                    ...options,
                },
            });
        },
        [getOrders],
    );

    const orders = data?.getOrders as IOrder[];

    return { getOrders, orders, error, loading, getOrdersWithOptions };
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
        (warehousesInput: IGetWarehousesInput) => {
            getWarehousesQuery({
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

export const useGetCities = () => {
    const [getCitiesQuery, { data, loading }] = useLazyQuery(GET_CITIES);

    const getCities = useCallback(
        (findString: string | undefined = "") => {
            getCitiesQuery({
                variables: {
                    findString,
                },
            });
        },
        [getCitiesQuery],
    );

    return { getCities, data, loading };
};

export const useGetCitiesStreets = () => {
    const [getStreetsQuery, { data, loading }] =
        useLazyQuery(GET_CITIES_STREETS);

    const getStreets = useCallback(
        (cityRef: string, findString: string | undefined = "") => {
            getStreetsQuery({
                variables: {
                    findString,
                    cityRef,
                },
            });
        },
        [getStreetsQuery],
    );

    return { getStreets, data, loading };
};
