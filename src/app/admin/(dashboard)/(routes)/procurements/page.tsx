"use client";

import { useGetProcurements } from "@/services/procurementService";
import { format } from "date-fns";
import { useEffect } from "react";

import { ProcurementsClient } from "./components/client";

const CategoriesPage = () => {
    const { getProcurements, data } = useGetProcurements();

    useEffect(() => {
        getProcurements();
    }, []);

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProcurementsClient
                    data={
                        data?.map((procurement) => ({
                            id: procurement.id,
                            productName: procurement.product.name,
                            supplierName: procurement.supplier.companyName,
                            amount: procurement.amount,
                            orderedDate: format(
                                procurement.orderedDate,
                                "yyyy-MM-dd",
                            ),
                        })) ?? []
                    }
                />
            </div>
        </div>
    );
};

export default CategoriesPage;
