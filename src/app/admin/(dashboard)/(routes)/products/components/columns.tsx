"use client";

import { CellAction } from "./cell-action";
import { IProduct } from "@/types/Product.types";
import { ColumnDef } from "@tanstack/react-table";

export interface ProductColumn extends Pick<IProduct, "id" | "size" | "name"> {
    price: number;
    categories: string;
}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "categories",
        header: "Categories",
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return <CellAction data={row.original} />;
        },
    },
];
