import { CREATE_PRODUCT } from "@/api/mutations/createProduct";
import { UPDATE_PRODUCT } from "@/api/mutations/updateProduct";
import {
    GET_PRODUCTS_BY_OPTIONS,
    GET_PRODUCTS_CARDS,
} from "@/api/queries/getProducts";
import {
    IGetProductsOptions,
    IProduct,
    IProductCard,
    SIZE,
} from "@/types/Product.types";
import { useMutation, useQuery } from "@apollo/client";

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
    images: any[];
}

interface UpdateProductData extends CreateProductData {
    amount: number;
}

export const useGetProductsQuery = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_CARDS, {});

    const products = data?.getProducts as IProductCard[];

    return { data: products, isLoading: loading, error };
};

export const useGetProductsWithOptions = (options?: IGetProductsOptions) => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_OPTIONS, {
        variables: { findOptions: options ?? {} },
    });

    const product = data?.getProducts as IProduct[];

    return { data: product, isLoading: loading, error };
};

export const useGetProductById = (id: number) => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_OPTIONS, {
        variables: { findOptions: { ids: id } },
    });

    const product = data?.getProducts[0] as IProduct;

    return { data: product, isLoading: loading, error };
};

export const useUpdateProduct = () => {
    const [updateProductMutation, { data, loading, error }] =
        useMutation(UPDATE_PRODUCT);

    const updateProduct = async (id: number, data: UpdateProductData) => {
        await updateProductMutation({
            variables: {
                updateProductId: id,
                product: data,
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
