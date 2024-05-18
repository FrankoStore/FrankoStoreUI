"use client";

import { CellAction } from "./cell-action";
import { ISupplier } from "@/types/Supplier.types";
import { ColumnDef } from "@tanstack/react-table";

export interface SupplierColumn
    extends Pick<ISupplier, "id" | "companyName" | "email"> {}

export const columns: ColumnDef<SupplierColumn>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "companyName",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return <CellAction data={row.original} />;
        },
    },
];
