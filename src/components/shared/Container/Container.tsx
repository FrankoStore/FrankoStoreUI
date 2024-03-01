import React from "react";

import { cn } from "@/lib/utils";

interface ContainerPropsType {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerPropsType> = (props) => {
    const { children, className } = props;

    return (
        <div className={cn("w-full max-w-[1500px] mx-auto px-4", className)}>
            {children}
        </div>
    );
};
