"use client";

import { ProductSection } from "./ProductSection";
import { useGetProductsWithOptions } from "@/services/productService";
import React from "react";

import ProductCardSkeleton from "@/components/shared/ProductCard/ProductCardSkeleton";

const PopularProducts = () => {
    const { data: products, isLoading } = useGetProductsWithOptions({
        take: 3,
    });

    return isLoading ? (
        <div className="grid card-list-grid-columns justify-between">
            {Array.from({ length: 3 }).map((_: any, idx: number) => (
                <ProductCardSkeleton key={idx} />
            ))}
        </div>
    ) : (
        <ProductSection
            items={products}
            title="популярне"
            buttonText="Переглянути всі товари"
            overrideContainerStyle="mt-[160px]"
        />
    );
};

export default PopularProducts;
