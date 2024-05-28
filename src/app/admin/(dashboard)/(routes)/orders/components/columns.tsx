"use client";

import { CellAction } from "./cell-action";
import { IOrder } from "@/types/Order.types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<IOrder>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "customer",
        header: "Customer email",
        accessorFn: (order) => order.customer.email,
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "deliveryAddress",
        header: "Address",
    },
    {
        accessorKey: "summaryPayment",
        header: "Total price",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return row.original.isPaid ? (
                <CellAction data={row.original} />
            ) : (
                <></>
            );
        },
    },
    {
        accessorKey: "createdAt",
        header: "Created at",
        accessorFn: (order) => format(new Date(order.createdAt), "yyyy-MM-dd"),
    },
];
