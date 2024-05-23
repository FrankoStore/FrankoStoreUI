import { IGetSettlementsResponse } from "@/types/Order.types";
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
        console.log(error);
        return [];
    }
};
