"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";
import { useEffect } from "react";

import { CategoriesClient } from "./components/client";

const CategoriesPage = () => {
    const { data: categories, getCategories } = useGetCategoriesQuery();

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoriesClient data={categories ?? []} />
            </div>
        </div>
    );
};

export default CategoriesPage;
