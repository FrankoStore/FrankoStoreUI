"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { ProductForm } from "../../_components/product-form";

const formSchema = z.object({
    name: z.string().min(1),
    images: z.object({ url: z.string() }).array(),
    price: z.coerce.number().min(1),
    categoryId: z.string().min(1),
});

type ProductFormValues = z.infer<typeof formSchema>;

const EditProductPage = () => {
    const params = useParams();
    const router = useRouter();

    const initialData = {
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
    }; // get this from api, as current product values

    const [loading, setLoading] = useState(false);

    const title = "Edit product";
    const description = "Edit existing product";
    const toastMessage = "Product updated.";
    const action = "Edit";

    const defaultValues = initialData
        ? {
              ...initialData,
              price: parseFloat(String(initialData?.price)),
          }
        : {
              name: "",
              images: [],
              price: 0,
              categoryId: "",
          };

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (data: ProductFormValues) => {
        try {
            setLoading(true);
            // make request

            router.push(`/${params.storeId}/products`);
            router.refresh();
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm categories={[]} initialData={defaultValues} />
            </div>
        </div>
    );
};

export default EditProductPage;
