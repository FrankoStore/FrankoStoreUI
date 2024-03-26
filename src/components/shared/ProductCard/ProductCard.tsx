"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import prodImg from "@public/test_prod.png";

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
            <div className="w-full aspect-[307/377] cursor-pointer">
                <Image src={prodImg} alt="img" className="w-full" />
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
