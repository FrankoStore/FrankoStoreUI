"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { ProductForm } from "../../_components/product-form";
import { Button } from "@/components/ui/buttonAdmin";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    name: z.string().min(1),
    images: z.object({ url: z.string() }).array(),
    price: z.coerce.number().min(1),
    categoryId: z.string().min(1),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
    initialData: any | null;
    productId: number;
    categories: any[] | null;
}

const EditProduct: React.FC<ProductFormProps> = ({
    initialData,
    productId,
    categories,
}) => {
    const params = useParams();
    const router = useRouter();

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
                <ProductForm
                    categories={categories}
                    initialData={defaultValues}
                />
            </div>
        </div>
    );
};

export default EditProduct;
