import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border-[1px] font-light text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-darkblue text-white border-transparent hover:bg-darkblue/90",
                outline:
                    "bg-white text-darkblue border-darkblue hover:bg-white/90",
                link: "bg-transparent border-none color-black uppercase font-semibold",
                lightLink: "bg-transparent border-none color-black",
                icon: "border-none bg-transparent",
            },
            size: {
                primary: "w-[307px] h-[53px] text-[18px]",
                link: "text-[17px]",
            },
        },
        compoundVariants: [
            {
                variant: "icon",
                size: "primary",
                class: "p-1 w-auto",
            },
        ],
        defaultVariants: {
            variant: "primary",
            size: "primary",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
