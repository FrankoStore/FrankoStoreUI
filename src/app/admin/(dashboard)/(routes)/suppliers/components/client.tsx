"use client";

import { SupplierColumn, columns } from "./columns";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/buttonAdmin";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface SupplierClientProps {
    data: SupplierColumn[];
}

export const SuppliersClient: React.FC<SupplierClientProps> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Suppliers (${data?.length ?? 0})`}
                    description="Manage suppliers for your store"
                />
                <Button onClick={() => router.push(`/admin/suppliers/add`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="companyName" columns={columns} data={data} />
        </>
    );
};
