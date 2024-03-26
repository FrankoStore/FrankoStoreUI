"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

export type CategoryColumn = {
    id: string;
    name: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
