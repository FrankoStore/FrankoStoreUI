"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardPropsType {
    id?: string;
    image?: string;
    title?: string;
    price?: string;
    overrideCardContainerStyle?: string;
}

export const ProductCard: React.FC<ProductCardPropsType> = (props) => {
    const {
        id,
        image,
        title = "Екоторба “Сlassic",
        price = "125 грн",
        overrideCardContainerStyle,
    } = props;

    return (
        <div className={overrideCardContainerStyle}>
            <div className="w-full aspect-[307/377] bg-[#F0EFEF] cursor-pointer">
                {/* <Image /> */}
            </div>
            <Link
                href={`/product/${id}`}
                className="text-center w-full block text-[17px] mt-[25px] font-semibold"
            >
                {title}
            </Link>
            <p className="w-full text-center text-[17px] font-light mt-[5px]">
                {price}
            </p>
        </div>
    );
};
