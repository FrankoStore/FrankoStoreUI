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
    buttonAction?: () => void;
}

export const ProductSection: React.FC<ProductSectionPropsType> = (props) => {
    const { title, items, buttonText, overrideContainerStyle, buttonAction } =
        props;

    return (
        <div className={overrideContainerStyle}>
            {!!title && (
                <h3 className="uppercase text-[44px] lg:text-[55px] text-center text-darkblue">
                    {title}
                </h3>
            )}
            <ProductCardList
                items={items}
                buttonText={buttonText}
                loadMore={buttonAction}
                overrideContainerStyle="mt-[56px] lg:mt-[74px]"
            />
        </div>
    );
};
