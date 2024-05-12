"use client";

import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { useCart } from "@/hooks/use-cart";

interface AmountCounterPropsType {
    productId: number;
    quantity: number;
    overrideContainerStyle?: string;
}

export const AmountCounter: React.FC<AmountCounterPropsType> = (props) => {
    const { overrideContainerStyle, productId, quantity } = props;

    const [counter, setCounter] = useState(quantity);
    const { updateQuantity } = useCart();

    const increase = () => {
        setCounter((prev) => prev + 1);
        updateQuantity(productId, counter + 1);
    };
    const decrease = () => {
        if (counter === 0) return;
        setCounter((prev) => prev - 1);
        updateQuantity(productId, counter - 1);
    };

    return (
        <div
            className={cn(
                "w-[83px] h-[53px] border-[1px] border-black flex",
                overrideContainerStyle,
            )}
        >
            <div className="w-[53px] h-full border-r-[1px] border-black flex items-center justify-center">
                <p className="text-[22px] select-none">{counter}</p>
            </div>
            <div className="flex-1">
                <div
                    onClick={() => increase()}
                    className="h-1/2 cursor-pointer select-none font-light border-b-[1px] border-black flex items-center justify-center"
                >
                    <PlusIcon width={20} />
                </div>
                <div
                    onClick={() => decrease()}
                    className="h-1/2 cursor-pointer select-none font-light text-[29px] flex items-center justify-center"
                >
                    -
                </div>
            </div>
        </div>
    );
};
