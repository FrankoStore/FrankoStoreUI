"use client";

import { useGetProductsQuery } from "@/services/productService";
import { format } from "date-fns";
import { useEffect, useState } from "react";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
    const { data: products } = useGetProductsQuery();

    const [formattedProducts, setFormattedProducts] = useState<ProductColumn[]>(
        [],
    );

    useEffect(() => {
        const formattedProducts: ProductColumn[] = products?.map(
            (item: any) => ({
                name: item.name,
                price: item.retailPrice,
                categories: item.categories[0].name,
                size: item.size,
            }),
        );

        console.log(products);

        setFormattedProducts(formattedProducts);
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
