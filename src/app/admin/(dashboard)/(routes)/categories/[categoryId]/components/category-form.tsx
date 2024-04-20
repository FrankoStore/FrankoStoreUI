"use client";

import {
    useCreateCategory,
    useUpdateCategoryName,
} from "@/services/categoriesService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

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
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    name: z.string().min(2),
});

type CategoryFormValues = z.infer<typeof formSchema>;

interface CategoryFormProps {
    initialData: { id: number; name: string } | null;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData?.name ? "Edit category" : "Create category";
    const description = initialData?.name
        ? "Edit a category."
        : "Add a new category";
    const toastMessage = initialData?.name
        ? "Category updated."
        : "Category created.";
    const action = initialData?.name ? "Save changes" : "Create";

    const { updateCategory } = useUpdateCategoryName();
    const { createCategory } = useCreateCategory();

    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(formSchema),
        values: {
            name: initialData?.name || "",
        },
    });

    const onSubmit = async (data: CategoryFormValues) => {
        try {
            setLoading(true);
            if (initialData?.name) {
                await updateCategory(initialData.id, data.name);
            } else {
                await createCategory(data.name);
            }

            router.refresh();
            router.push(`/admin/categories`);
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error("Щось пішло не так");
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);

            router.refresh();
            router.push(`/admin/categories`);
            toast.success("Category deleted.");
        } catch (error: any) {
            toast.error(
                "Make sure you removed all products using this category first.",
            );
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

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
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder="Category name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
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
