"use client";

import { useGetProductById } from "@/services/productService";
import { useParams } from "next/navigation";

import { ProductForm } from "../../_components/product-form";

const initialData = {
    name: "",
    images: [],
    price: 0,
    categories: [],
    length: 0,
    width: 0,
    height: 0,
    size: "",
    retailPrice: 0,
    description: "",
    id: null,
}; // get this from api, as current product values

const EditProductPage = () => {
    const params = useParams();
    const { data, isLoading, error } = useGetProductById(+params.productId);

    if (isLoading) return null;
    const defaultValues = {
        ...initialData,
        ...data,
        categories: data.categories.map(({ name }) => ({ name })),
    };

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm id={+params.productId} initialData={defaultValues} view="edit" />
            </div>
        </div>
    );
};

export default EditProductPage;
