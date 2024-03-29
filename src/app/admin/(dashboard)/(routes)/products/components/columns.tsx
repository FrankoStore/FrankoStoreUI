"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

export type ProductColumn = {
    id: string;
    name: string;
    price: string;
    category: string;
    size: string;
    color: string;
    createdAt: string;
    isFeatured: boolean;
    isArchived: boolean;
};

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
            console.log(row.original, "asdasdasd");
            return <CellAction data={row.original} />;
        },
    },
];
