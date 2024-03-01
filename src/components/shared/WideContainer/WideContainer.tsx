import React from "react";

import { cn } from "@/lib/utils";

interface WideContainerPropsType {
    children: React.ReactNode;
    className?: string;
}

export const WideContainer: React.FC<WideContainerPropsType> = (props) => {
    const { children, className } = props;

    return (
        <div className={cn("max-w-[2000px] mx-auto px-4 md:px-0", className)}>
            {children}
        </div>
    );
};
