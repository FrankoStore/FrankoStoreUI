"use client";

import React from "react";

import { Cart, useCart } from "@/hooks/use-cart";
import usePersistStore from "@/hooks/use-persist-store";

const OverallPrice = () => {
    const cart = usePersistStore<Cart, Cart>(useCart, (state) => state);
    return (
        <p className="font-medium text-[23px]">
            До оплати:
            {cart?.products.reduce(
                (acc, product) => acc + product.retailPrice * product.quantity,
                0,
            ) ?? 0}
            грн
        </p>
    );
};

export default OverallPrice;
