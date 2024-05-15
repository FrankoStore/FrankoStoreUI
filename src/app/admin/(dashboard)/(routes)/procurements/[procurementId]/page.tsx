"use client";

import { ProcurementForm } from "./components/procurement-form";

function isNumeric(str: string) {
    if (typeof str != "string") return false; // we only process strings!
    return !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}

const ProcurementPage = ({ params }: { params: { categoryId: string } }) => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProcurementForm initialData={null} />
            </div>
        </div>
    );
};

export default ProcurementPage;
