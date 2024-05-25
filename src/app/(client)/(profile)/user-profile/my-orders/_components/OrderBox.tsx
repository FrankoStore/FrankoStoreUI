import { IOrder } from "@/types/Order.types";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

import { converToBase64 } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import prodImg from "@public/product.png";

export const OrderBox = ({ order }: { order: IOrder }) => {
    return (
        <div className="flex justify-between">
            <div>
                <p className="font-light text-[17px]">№ {order.id}</p>
                <p className="text-[23px] mt-[11px]">
                    {order.summaryPayment} грн
                </p>
                <div className="flex gap-6 mt-[22px]">
                    {order.products.map((product) => (
                        <Image
                            src={
                                product.images?.[0]
                                    ? converToBase64(product.images?.[0])
                                    : prodImg
                            }
                            alt={`label for order number ${order.id} products`}
                            width={124}
                            height={152}
                            className="aspect-[124/152]"
                            key={product.id}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
                <p className="text-[17px] font-light">
                    {format(order.createdAt, "yyyy-MM-dd")}
                </p>
                <Button onClick={() => alert("не робоча")}>Відстежити</Button>
            </div>
        </div>
    );
};
