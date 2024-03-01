"use client";

import { ProductCard } from "..";
import React from "react";

import { Button } from "@/components/ui/button";

export interface Product {
    id?: string;
    image?: string;
    title?: string;
    price?: string;
}

interface ProductCardListPropsType {
    items?: Product[];
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
