"use client";

import { useGetProductById } from "@/services/productService";
import { IProductCard } from "@/types/Product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { converToBase64 } from "@/lib/utils";

import { useCart } from "@/hooks/use-cart";

import prodImg from "@public/test_prod.png";

interface ProductCardPropsType extends IProductCard {
    overrideCardContainerStyle?: string;
}

export const ProductCard: React.FC<ProductCardPropsType> = (props) => {
    const { id, name, retailPrice, images, overrideCardContainerStyle } = props;
    const { data: product } = useGetProductById(id);

    const { addProduct } = useCart();

    return (
        <div
            className={overrideCardContainerStyle}
            onClick={() => addProduct(product)}
        >
            <Link href={`/product/${id}`}>
                <Image
                    src={images[0] ? converToBase64(images[0]) : prodImg}
                    width={250}
                    height={250}
                    alt="product"
                    className="w-full aspect-[307/377] rounded-sm"
                />
                <p className="text-center w-full block text-[17px] mt-[25px] font-semibold">
                    {name}
                </p>
                <p className="w-full text-center text-[17px] font-light mt-[5px]">
                    {retailPrice} грн
                </p>
            </Link>
        </div>
    );
};
