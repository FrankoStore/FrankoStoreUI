"use client";

import { ProductCard } from "..";
import { IProductCard } from "@/types/Product.types";
import React from "react";

import { Button } from "@/components/ui/button";

interface ProductCardListPropsType {
    items?: IProductCard[];
    buttonText?: string;
    loadMore?: () => void;
    overrideContainerStyle?: string;
}

export const ProductCardList: React.FC<ProductCardListPropsType> = (props) => {
    const {
        items,
        loadMore = () => {},
        buttonText,
        overrideContainerStyle,
    } = props;

    return (
        <div className={overrideContainerStyle}>
            <div className="grid card-list-grid-columns justify-between">
                {items?.map((item) => <ProductCard {...item} key={item.id} />)}
            </div>
            {!!buttonText && (
                <div className="flex justify-center mt-[84px]">
                    <Button variant="outline" onClick={() => loadMore()}>
                        {buttonText}
                    </Button>
                </div>
            )}
        </div>
    );
};
