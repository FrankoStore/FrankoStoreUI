"use client";

import { ProcurementColumn, columns } from "./columns";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/buttonAdmin";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface ProcurementClientProps {
    data: ProcurementColumn[];
}

export const ProcurementsClient: React.FC<ProcurementClientProps> = ({
    data,
}) => {
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Procurements (${data.length})`}
                    description="Manage procurements for your store"
                />
                <Button onClick={() => router.push(`/admin/procurements/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="productName" columns={columns} data={data} />
        </>
    );
};
