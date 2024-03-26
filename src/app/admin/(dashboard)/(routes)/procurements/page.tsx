"use client";

import { GET_CATEGORIES } from "@/api/queries/getCategories";
import { useGetCategoriesQuery } from "@/services/categoriesService";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { CategoriesClient } from "./components/client";

const CategoriesPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoriesClient data={[]} />
            </div>
        </div>
    );
};

export default CategoriesPage;
