import { ICategory, IGetCategoriesOptions } from "./Category.types";

export interface IProductImage {
    path: string;
    fileName: string;
    id: number;
    fileExtension: string;
}

export enum SIZE {
    L = "L",
    M = "M",
    S = "S",
    XL = "XL",
    XXL = "XXL",
}

export interface IProductCard {
    id: number;
    name: string;
    images: IProductImage[];
    retailPrice: number;
    categories: ICategory[];
}

export interface IProduct extends IProductCard {
    amount: number;
    height: number;
    categories: ICategory[];
    description?: string;
    size: keyof typeof SIZE;
}

export interface IGetProductsOptions {
    ids?: number[];
    name?: string;

    retailPrice?: number;
    description?: string;
    height?: number;
    width?: number;

    length?: number;
    sizes?: SIZE[];
    amount?: number;
    categories?: IGetCategoriesOptions;
    skip?: number;
    take?: number;
}
