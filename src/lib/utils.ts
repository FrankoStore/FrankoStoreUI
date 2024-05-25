import {
    City,
    IGetSettlementsResponse,
    Street,
    Warehouse,
} from "@/types/Order.types";
import { IUserDataType } from "@/types/User.types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const checkIsAdmin = (user: IUserDataType) =>
    !!user?.roles.find((role) => role.id === 2 || role.id === 3);

export const parseSettlements = async (novapostResponse: string) => {
    try {
        const novapostData = (await JSON.parse(
            novapostResponse,
        )) as IGetSettlementsResponse[];
        const cityAddresses = novapostData[0].Addresses;
        return cityAddresses.map((cityAddress) => ({
            label: cityAddress.Present,
            value: cityAddress.Ref,
        }));
    } catch (error) {
        return [];
    }
};

export const parseCities = async (novaPostCitiesResponse: string) => {
    try {
        const novaPostData = (await JSON.parse(novaPostCitiesResponse)) as any;
        const cities = novaPostData.data as City[];
        return cities.map((city) => ({
            label: city.Description,
            value: city.Ref,
        }));
    } catch (error) {
        return [];
    }
};

export const parseStreets = async (novaPostStreetsResponse: string) => {
    try {
        const novaPostData = (await JSON.parse(novaPostStreetsResponse)) as any;
        const streets = novaPostData.data as Street[];
        return streets.map((street) => ({
            label: street.Description,
            value: street.Ref,
        }));
    } catch (error) {
        return [];
    }
};

export const parseWarehouses = async (novaPostWarehousesResponse: string) => {
    try {
        const novaPostData = (await JSON.parse(
            novaPostWarehousesResponse,
        )) as Warehouse[];
        return novaPostData.map((warehouse) => ({
            label: warehouse.Description,
            value: warehouse.Ref,
        }));
    } catch (error) {
        return [];
    }
};

export const converToBase64 = (image: {
    fileExtension: string;
    path: string;
    [key: string]: any;
}) => `data:image/${image.fileExtension.substring(1)};base64,${image.path}`;
