import { CREATE_CATEGORY } from "@/api/mutations/createCategory";
import { UPDATE_CATEGORY_NAME } from "@/api/mutations/updateCategoryName";
import { GET_CATEGORIES } from "@/api/queries/getCategories";
import { ICategory } from "@/types/Category.types";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

export const useGetCategoriesQuery = () => {
    const [getCategories, { loading, error, data }] =
        useLazyQuery(GET_CATEGORIES);

    const categories: ICategory[] = data?.getProductCategories;

    return { data: categories, isLoading: loading, error, getCategories };
};

export const useGetCategoryByIdQuery = (id: number) => {
    const { loading, error, data } = useQuery(GET_CATEGORIES, {
        variables: { findOptions: { ids: id } },
    });

    const categories = data?.getProductCategories[0];

    return { data: categories, isLoading: loading, error };
};

export const useUpdateCategoryName = () => {
    const [updateCategoryMutation, { loading, error }] =
        useMutation(UPDATE_CATEGORY_NAME);

    const updateCategory = async (id: number, newName: string) => {
        await updateCategoryMutation({
            variables: {
                updateProductCategoryId: id,
                productCategory: { name: newName },
            },
        });
    };

    return { updateCategory, loading, error };
};

export const useCreateCategory = () => {
    const [createCategoryMutation, { data, loading, error }] =
        useMutation(CREATE_CATEGORY);

    const createCategory = async (name: string) => {
        await createCategoryMutation({
            variables: {
                productCategory: { name },
            },
        });
    };

    return { createCategory, loading, error };
};
