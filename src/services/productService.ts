import { CREATE_CATEGORY } from "@/api/mutations/createCategory";
import { CREATE_PRODUCT } from "@/api/mutations/createProduct";
import { UPDATE_CATEGORY_NAME } from "@/api/mutations/updateCategoryName";
import { UPDATE_PRODUCT } from "@/api/mutations/updateProduct";
import { GET_CATEGORIES } from "@/api/queries/getCategories";
import { useMutation, useQuery } from "@apollo/client";

enum SIZE {
    L = "L",
    M = "M",
    S = "S",
    XL = "XL",
    XXL = "XXL",
}

interface CreateProductData {
    categories: {
        name: string;
    }[];
    description: string;
    height: number;
    length: number;
    name: string;
    retailPrice: number;
    size: keyof typeof SIZE;
    width: number;
}

export const useGetProductsQuery = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    const categories = data?.getProductCategories;

    return { data: categories, isLoading: loading, error };
};

export const useGetProductByIdQuery = (id: number) => {
    const { loading, error, data } = useQuery(GET_CATEGORIES, {
        variables: { findOptions: { ids: id } },
    });

    const categories = data?.getProductCategories[0];

    return { data: categories, isLoading: loading, error };
};

export const useUpdateProduct = () => {
    const [updateProductMutation, { data, loading, error }] =
        useMutation(UPDATE_PRODUCT);

    const updateProduct = async (id: number, data: CreateProductData) => {
        await updateProductMutation({
            variables: {
                updateProductId: id,
                productProduct: data,
            },
        });
    };

    return { updateProduct, loading, error };
};

export const useCreateProduct = () => {
    const [createProductMutation, { data, loading, error }] =
        useMutation(CREATE_PRODUCT);

    const createProduct = async (data: CreateProductData) => {
        await createProductMutation({
            variables: {
                product: data,
            },
        });
    };

    return { createProduct, loading, error };
};
