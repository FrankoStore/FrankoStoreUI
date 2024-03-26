"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";

import { ProductForm } from "./components/product-form";

const product = {};

const categories: any[] = [];

const ProductPage = ({ params }: { params: { productId: string } }) => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm categories={categories} initialData={product} />
            </div>
        </div>
    );
};

export default ProductPage;
