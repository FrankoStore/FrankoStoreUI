"use client";

import { columns } from "./columns";
import { ICategory } from "@/types/Category.types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/buttonAdmin";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface CategoriesClientProps {
    data: ICategory[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store"
                />
                <Button onClick={() => router.push(`/admin/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    );
};
