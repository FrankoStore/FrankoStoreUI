"use client";

import { useGetProcurements } from "@/services/procurementService";
import { useEffect } from "react";

import { ProcurementForm } from "./components/procurement-form";

const ProcurementPage = ({
    params: { procurementId },
}: {
    params: { procurementId: string };
}) => {
    const { data, getProcurements, error } = useGetProcurements();

    useEffect(() => {
        getProcurements();
    }, []);

    const initialData =
        isNaN(+procurementId) || error
            ? null
            : data?.find((procurement) => +procurementId === procurement.id) ??
              null;

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProcurementForm initialData={initialData} />
            </div>
        </div>
    );
};

export default ProcurementPage;
