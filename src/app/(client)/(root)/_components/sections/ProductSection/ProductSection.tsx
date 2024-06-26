"use client";

import { IProductCard } from "@/types/Product.types";
import React from "react";

import { ProductCardList } from "@/components/shared";

interface ProductSectionPropsType {
    title?: string;
    items?: IProductCard[];
    buttonText?: string;
    overrideTitleStyle?: string;
    overrideContainerStyle?: string;
}

export const ProductSection: React.FC<ProductSectionPropsType> = (props) => {
    const { title, items, buttonText, overrideContainerStyle } = props;

    return (
        <div className={overrideContainerStyle}>
            {!!title && (
                <h3 className="uppercase text-[55px] text-center text-darkblue">
                    {title}
                </h3>
            )}
            <ProductCardList
                items={items}
                buttonText={buttonText}
                loadMore={() => {}}
                overrideContainerStyle="mt-[74px]"
            />
        </div>
    );
};
