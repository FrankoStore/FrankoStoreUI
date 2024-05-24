"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";
import { useCreateProduct, useUpdateProduct } from "@/services/productService";
import { IProduct } from "@/types/Product.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FileUpload } from "@/components/shared/adminDashboard/dropzone";
import { AlertModal } from "@/components/shared/adminDashboard/modals/alert-modal";
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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const sizes = ["L", "M", "S", "XL", "XXL"] as const;

const formSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    images: z
        .object({
            file: z.string(),
            fileName: z.string(),
            fileExtension: z.string(),
            fileSize: z.number(),
        })
        .array()
        .nonempty(),
    retailPrice: z.coerce.number().min(1),
    categories: z.object({ name: z.string() }).array(),
    height: z.coerce.number().min(0),
    width: z.coerce.number().min(0),
    length: z.coerce.number().min(0),
    size: z.enum(sizes),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
    initialData: Omit<IProduct, "categories" | "id"> & {
        categories: { name: string | undefined }[];
    };
    view?: "add" | "edit";
    id?: number;
}

export const ProductForm: React.FC<ProductFormProps> = ({
    initialData,
    view = "add",
    id,
}) => {
    const router = useRouter();

    const { createProduct } = useCreateProduct();
    const { updateProduct } = useUpdateProduct();
    const {
        data: categories,
        isLoading: isCategoriesLoading,
        getCategories,
    } = useGetCategoriesQuery();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = view === "add" ? "Create product" : "Edit product";
    const description =
        view === "add" ? "Add a new product" : "Edit existing product";
    const toastMessage =
        view === "add" ? "Product created." : "Product updated.";
    const action = view === "add" ? "Create" : "Edit";

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    const { toast } = useToast();

    const onSubmit = async (data: ProductFormValues) => {
        const requestData = {
            categories: data.categories,
            description: data.description,
            height: data.height,
            length: data.length,
            width: data.width,
            size: data.size,
            name: data.name,
            retailPrice: data.retailPrice,
            images: data.images.map((image) => ({
                ...image,
                path: `data:image/${image.fileExtension.substring(1)};base64,${image.file}`,
            })),
        };
        try {
            setLoading(true);
            // make request

            view === "add"
                ? await createProduct(requestData)
                : await updateProduct(id ?? 0, { ...requestData, amount: 10 });

            toast({ title: toastMessage });
            router.push(`/admin/products`);
        } catch (error: any) {
            toast({ title: "Something went wrong." });
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            router.push(`/admin/products`);
            toast({ title: "Product deleted." });
        } catch (error: any) {
            toast({ title: "Something went wrong." });
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full"
                >
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Product name"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="retailPrice"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                disabled={loading}
                                                placeholder="0 UAH"
                                                required
                                                min={0}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {!isCategoriesLoading && (
                                <FormField
                                    control={form.control}
                                    name="categories"
                                    render={({ field }) => (
                                        <FormItem className="w-1/3">
                                            <FormLabel>Category</FormLabel>
                                            <Select
                                                disabled={loading}
                                                onValueChange={(value) =>
                                                    field.onChange([
                                                        {
                                                            name: value,
                                                        },
                                                    ])
                                                }
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {categories?.map(
                                                        (category) => (
                                                            <SelectItem
                                                                key={
                                                                    category.id
                                                                }
                                                                value={
                                                                    category.name
                                                                }
                                                            >
                                                                {category.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>
                        <div className="flex gap-8">
                            <FormField
                                control={form.control}
                                name="width"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Width</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                disabled={loading}
                                                placeholder="0 cm"
                                                required
                                                min={0}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="height"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Height</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                disabled={loading}
                                                placeholder="0 cm"
                                                required
                                                min={0}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="length"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Length</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                disabled={loading}
                                                placeholder="0 cm"
                                                required
                                                min={0}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-8">
                            <FormField
                                control={form.control}
                                name="size"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Size</FormLabel>
                                        <Select
                                            {...field}
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                            disabled={loading}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        defaultValue={
                                                            field.value
                                                        }
                                                        placeholder="Select a size"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {sizes.map((size, index) => (
                                                    <SelectItem
                                                        value={size}
                                                        key={index}
                                                    >
                                                        {size}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="images"
                                render={({ field }) => (
                                    <FormItem className="w-2/3">
                                        <FileUpload
                                            onChange={field.onChange}
                                            disabled={loading}
                                        />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <Editor
                                        value={field.value}
                                        onTextChange={(e) =>
                                            field.onChange(e.htmlValue)
                                        }
                                        style={{ height: "320px" }}
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={loading}
                        className="ml-auto"
                        type="submit"
                    >
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    );
};
