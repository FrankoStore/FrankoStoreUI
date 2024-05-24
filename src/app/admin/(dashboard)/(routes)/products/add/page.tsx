"use client";

import { SIZE } from "@/types/Product.types";

import { ProductForm } from "../_components/product-form";

const defaultValues = {
    name: "",
    images: [],
    price: 0,
    categories: [],
    length: 0,
    width: 0,
    height: 0,
    size: SIZE.L,
    retailPrice: 0,
    description: "",
    amount: 10,
};

const ProductPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm initialData={defaultValues} />
            </div>
        </div>
    );
};

export default ProductPage;
