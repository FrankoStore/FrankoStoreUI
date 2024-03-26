import { format } from "date-fns";

import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";

const orders: any[] = [];

const OrdersPage = async () => {
    const formattedOrders: OrderColumn[] = orders.map((item: any) => ({
        id: item.id,
        phone: item.phone,
        address: item.address,
        products: item.orderItems
            .map((orderItem: any) => orderItem.product.name)
            .join(", "),
        totalPrice: item.orderItems.reduce((total: number, item: any) => {
            return total + Number(item.product.price);
        }, 0),
        isPaid: item.isPaid,
        createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderClient data={formattedOrders} />
            </div>
        </div>
    );
};

export default OrdersPage;
