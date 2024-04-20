"use client";

import { useGetProductsWithOptions } from "@/services/productService";
import { useEffect, useState } from "react";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage = () => {
    const { data: products } = useGetProductsWithOptions();

    const [formattedProducts, setFormattedProducts] = useState<ProductColumn[]>(
        [],
    );

    useEffect(() => {
        setFormattedProducts(
            products?.map(({ name, size, categories, retailPrice, id }) => ({
                name,
                size,
                categories: categories
                    .map((category) => category.name)
                    .join(","),
                price: retailPrice,
                id,
            })),
        );
    }, [products]);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductsClient data={formattedProducts} />
            </div>
        </div>
    );
};

export default ProductsPage;
