"use client";

import {
    useCreateProcurement,
    useUpdateProcurement,
} from "@/services/procurementService";
import { useGetProductsQuery } from "@/services/productService";
import { useGetSuppliers } from "@/services/supplierService";
import { IProcurementInfo } from "@/types/Procurement.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Editor } from "primereact/editor";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { AlertModal } from "@/components/shared/adminDashboard/modals/alert-modal";
import { Button } from "@/components/ui/buttonAdmin";
import { DatePicker } from "@/components/ui/date-picker";
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

const formSchema = z.object({
    amount: z.coerce.number().min(1),
    description: z.string().min(1),
    orderedDate: z.string().or(z.date()),
    productId: z.string(),
    purchasePrice: z.coerce.number(),
    supplierId: z.string(),
});

type ProcurementFormValues = z.infer<typeof formSchema>;

interface ProcurementFormProps {
    initialData: IProcurementInfo | null;
}

export const ProcurementForm: React.FC<ProcurementFormProps> = ({
    initialData,
}) => {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data: products, getProducts } = useGetProductsQuery();
    const { updateProcurement } = useUpdateProcurement();
    const { getSuppliers, data: suppliers } = useGetSuppliers();

    const title = initialData ? "Edit Procurement" : "Create Procurement";
    const description = initialData
        ? "Edit a Procurement."
        : "Add a new Procurement";
    const toastMessage = initialData
        ? "Procurement updated."
        : "Procurement created.";
    const action = initialData ? "Save changes" : "Create";

    const { createProcurement } = useCreateProcurement();

    const { toast } = useToast();

    const form = useForm<ProcurementFormValues>({
        resolver: zodResolver(formSchema),
        values: initialData
            ? {
                  productId: initialData?.product.name,
                  supplierId: initialData?.supplier.companyName,
                  amount: initialData?.amount,
                  description: initialData.description,
                  orderedDate: initialData.orderedDate,
                  purchasePrice: initialData.purchasePrice,
              }
            : undefined,
    });

    const onSubmit = async (data: ProcurementFormValues) => {
        try {
            setLoading(true);

            const procurementData = {
                ...data,
                orderedDate: new Date(data.orderedDate),
                productId:
                    products.find((product) => product.name === data.productId)
                        ?.id ?? 0,
                supplierId:
                    suppliers.find(
                        (supplier) => supplier.companyName === data.supplierId,
                    )?.id ?? 0,
            };
            if (initialData) {
                await updateProcurement(initialData.id, procurementData);
            } else {
                await createProcurement(procurementData);
            }

            toast({ title: toastMessage });
            router.push(`/admin/procurements`);
        } catch (error: any) {
            toast({ title: "Щось пішло не так" });
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);

            toast({ title: "Procurement deleted." });
            router.push(`/admin/procurements`);
        } catch (error: any) {
            toast({
                title: "Make sure you removed all products using this procurement first.",
            });
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    useEffect(() => {
        getSuppliers();
        getProducts();
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
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder="Amount"
                                            type="number"
                                            required={!!initialData}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="productId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product</FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        {...field}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a product" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {products?.map((product) => (
                                                <SelectItem
                                                    key={product.id}
                                                    value={product.name}
                                                >
                                                    {product.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DatePicker
                            name="orderedDate"
                            title="Ordered Date"
                            control={form.control}
                        />

                        <FormField
                            control={form.control}
                            name="purchasePrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Purchase Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            placeholder="Enter a price"
                                            type="number"
                                            required={!!initialData}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="supplierId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Supplier</FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        {...field}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a supplier" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {suppliers?.map((supplier) => (
                                                <SelectItem
                                                    key={supplier.id}
                                                    value={supplier.companyName}
                                                >
                                                    {supplier.companyName}
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
                            name="description"
                            render={({ field }) => (
                                <FormItem className="col-start-1 col-end-4">
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
