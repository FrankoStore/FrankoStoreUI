"use client";

import { useGetProductById } from "@/services/productService";
import { IProductCard } from "@/types/Product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useCart } from "@/hooks/use-cart";

import prodImg from "@public/test_prod.png";

interface ProductCardPropsType extends IProductCard {
    overrideCardContainerStyle?: string;
}

export const ProductCard: React.FC<ProductCardPropsType> = (props) => {
    const {
        id,
        name = "Екоторба “Сlassic",
        retailPrice = 125,
        overrideCardContainerStyle,
    } = props;
    const { data: product } = useGetProductById(id);

    const { addProduct } = useCart();

    return (
        <div
            className={overrideCardContainerStyle}
            onClick={() => addProduct(product)}
        >
            <div className="w-full aspect-[307/377] cursor-pointer">
                <Image
                    src={prodImg}
                    width={250}
                    height={250}
                    alt="img"
                    className="w-full h-full"
                />
            </div>
            <Link
                href={`/product/${id}`}
                className="text-center w-full block text-[17px] mt-[25px] font-semibold"
            >
                {name}
            </Link>
            <p className="w-full text-center text-[17px] font-light mt-[5px]">
                {retailPrice} грн
            </p>
        </div>
    );
};
