"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";

import { ProductForm } from "../_components/product-form";

// const categories: any[] = [{ id: 1, name: "Test" }];

const defaultValues = {
    name: "",
    images: [],
    price: null,
    categories: "",
    length: null,
    width: null,
    height: null,
    size: "",
    retailPrice: null,
    description: "",
};

const ProductPage = ({ params }: { params: { productId: string } }) => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm
                    categories={categories}
                    initialData={defaultValues}
                />
            </div>
        </div>
    );
};

export default ProductPage;
