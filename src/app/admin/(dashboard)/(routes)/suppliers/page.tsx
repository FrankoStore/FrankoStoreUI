"use client";

import { useGetSuppliers } from "@/services/supplierService";
import { useEffect } from "react";

import { SuppliersClient } from "./components/client";

const SuppliersPage = () => {
    const { getSuppliers, data } = useGetSuppliers();

    useEffect(() => {
        getSuppliers();
    }, []);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SuppliersClient data={data} />
            </div>
        </div>
    );
};

export default SuppliersPage;
