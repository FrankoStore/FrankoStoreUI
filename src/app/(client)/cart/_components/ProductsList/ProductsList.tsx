"use client";

import { AmountCounter } from "../AmountCounter/AmountCounter";
import Image from "next/image";
import React from "react";

import { Cart, useCart } from "@/hooks/use-cart";
import usePersistStore from "@/hooks/use-persist-store";

import prodImg from "@public/test_prod.png";

const ProductsList = () => {
    const cart = usePersistStore<Cart, Cart>(useCart, (state) => state);

    return cart?.products.map((product) => (
        <div className="contents" key={product.id}>
            <div className="flex gap-[80px] mt-[35px] pb-[35px] border-b-[1px] border-b-black">
                <div className="w-[124px] aspect-[124/152]">
                    <Image src={prodImg} alt="product" />
                </div>
                <div>
                    <p className="font-medium text-[17px]">{product.name}</p>
                    <p className="text-[17px] mt-2">
                        {product.retailPrice} грн
                    </p>
                </div>
            </div>
            <div className="flex justify-end mt-[35px] pb-[35px] border-b-[1px] border-b-black">
                <AmountCounter
                    productId={product.id}
                    quantity={product.quantity}
                />
            </div>
            <div className="flex justify-end mt-[35px] pb-[35px] border-b-[1px] border-b-black">
                <p>{product.quantity * product.retailPrice} грн</p>
            </div>
        </div>
    ));
};

export default ProductsList;
