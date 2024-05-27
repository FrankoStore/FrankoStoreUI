import { IconPropsType } from "@/types/IconPropsType";
import React from "react";

export const ListItemIcon: React.FC<IconPropsType> = (props) => {
    const { width = "27", height = "27", fill = "white", className } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 6h18" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
        </svg>
    );
};
