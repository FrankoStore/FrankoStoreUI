"use client";

import { useGetCategoryByIdQuery } from "@/services/categoriesService";

import { CategoryForm } from "./components/category-form";

function isNumeric(str: string) {
    if (typeof str != "string") return false; // we only process strings!
    return !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}

const CategoryPage = ({ params }: { params: { categoryId: string } }) => {
    const { data: category } = useGetCategoryByIdQuery(
        isNumeric(params.categoryId) ? parseInt(params.categoryId) : null,
    );

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm initialData={category} />
            </div>
        </div>
    );
};

export default CategoryPage;
