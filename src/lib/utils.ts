import { IUserDataType } from "@/types/User.types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const checkIsAdmin = (user: IUserDataType) =>
    !!user?.roles.find((role) => role.id === 2 || role.id === 3);
