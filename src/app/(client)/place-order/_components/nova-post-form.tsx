import NovaPostDropdown from "./nova-post-dropdown";
import React from "react";

import { cn } from "@/lib/utils";

type NovaPostFormProps = {
    isDisabled: boolean;
};

const NovaPostForm = ({ isDisabled }: NovaPostFormProps) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-[30px] items-start mt-[30px]",
                isDisabled ? "opacity-70" : null,
            )}
        >
            <NovaPostDropdown />
        </div>
    );
};

export default NovaPostForm;
