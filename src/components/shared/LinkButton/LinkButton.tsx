"use clien";

import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface LinkButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    active?: boolean;
}

export const LinkButton: React.FC<LinkButtonPropsType> = (props) => {
    const { children, active = false, ...rest } = props;

    return (
        <Button
            variant="link"
            size="link"
            className={cn({
                underline: active,
            })}
            {...rest}
        >
            {children}
        </Button>
    );
};
