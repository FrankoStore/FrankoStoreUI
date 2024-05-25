"use client";

import { useGetOrders } from "@/services/orderService";
import { useEffect } from "react";

import { OrderClient } from "./components/client";

const OrdersPage = () => {
    const { getOrders, orders } = useGetOrders();

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderClient data={orders ?? []} />
            </div>
        </div>
    );
};

export default OrdersPage;
