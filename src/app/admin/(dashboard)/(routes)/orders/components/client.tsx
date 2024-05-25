"use client";

import { columns } from "./columns";
import { IOrder } from "@/types/Order.types";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface OrderClientProps {
    data: IOrder[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable
                searchKey="customer"
                columns={columns}
                data={data}
            />
        </>
    );
};
