"use client";

import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

interface AmountCounterPropsType {
    overrideContainerStyle?: string;
}

export const AmountCounter: React.FC<AmountCounterPropsType> = (props) => {
    const { overrideContainerStyle } = props;

    const [counter, setCounter] = useState(1);

    const increase = () => setCounter((prev) => prev + 1);
    const decrease = () => {
        if (counter === 1) return;
        else setCounter((prev) => prev - 1);
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
