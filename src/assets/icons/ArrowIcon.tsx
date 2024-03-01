import { IconPropsType } from "@/types/IconPropsType";
import React from "react";

export const ArrowIcon: React.FC<IconPropsType> = (props) => {
    const { width = "52", height = "44", fill = "#08275D" } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 52 44"
            stroke={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.1216 41.9578L48.0001 22.0793L28.1216 2.20079"
                stroke-width="4.5"
            />
            <path d="M-1.38324e-06 22L45 22" stroke-width="4.5" />
        </svg>
    );
};
