"use client";

import { useCapturePayment } from "@/services/orderService";
import { IOrder } from "@/types/Order.types";
import { Check, MoreHorizontal, X } from "lucide-react";
import { useState } from "react";

import { AlertModal } from "@/components/shared/adminDashboard/modals/alert-modal";
import { Button } from "@/components/ui/buttonAdmin";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

interface CellActionProps {
    data: IOrder;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const { capturePayment, loading } = useCapturePayment();
    const { toast } = useToast();

    const onConfirm = () => {
        try {
            capturePayment(data.id);
            toast({ title: "Payment captured successfully" });
            setOpen(false);
        } catch (error) {
            toast({ title: "Something went wrong" });
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="gap-1" align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        className="bg-green-600"
                        onClick={() => setOpen(true)}
                    >
                        <Check className="mr-2 h-4 w-4" /> Capture
                    </DropdownMenuItem>
                    <DropdownMenuItem className="bg-red-600" onClick={() => {}}>
                        <X className="mr-2 h-4 w-4" /> Cancel
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
