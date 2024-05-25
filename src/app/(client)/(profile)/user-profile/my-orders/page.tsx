"use client";

import { useGetOrders } from "@/services/orderService";
import { useEffect } from "react";

import { useActiveUser } from "@/hooks/use-active-user";

import { OrderBox } from "./_components/OrderBox";

const MyOrdersPage = () => {
    const { user } = useActiveUser();
    const { orders, getOrdersWithOptions } = useGetOrders();

    useEffect(() => {
        if (!user) return;
        getOrdersWithOptions({
            customerIds: [user?.id],
        });
    }, [user]);

    return (
        <div>
            <h2 className="font-medium text-[28px]">Мої замовлення</h2>
            <div className="mt-[40px] flex flex-col gap-[70px]">
                {orders?.map((order) => (
                    <OrderBox order={order} key={order.id} />
                ))}
            </div>
        </div>
    );
};

export default MyOrdersPage;
