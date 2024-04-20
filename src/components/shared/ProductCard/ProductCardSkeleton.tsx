import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col space-y-3">
            <Skeleton className="h-[370px] w-[347px] rounded-xl" />
            <div className="space-y-2 flex flex-col justify-center items-center">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
