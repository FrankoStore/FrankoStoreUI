"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

export type ProcurementColumn = {
    id: number;
    productName: string;
    supplierName: string;
    amount: number;
    orderedDate: string;
};

export const columns: ColumnDef<ProcurementColumn>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "productName",
        header: "Product",
    },
    {
        accessorKey: "supplierName",
        header: "Supplier",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "orderedDate",
        header: "Ordered Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
