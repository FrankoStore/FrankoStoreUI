import { IconPropsType } from "@/types/IconPropsType";
import React from "react";

export const AdminDashboardIcon: React.FC<IconPropsType> = (props) => {
    const { width = "21", height = "21", fill = "black" } = props;
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
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 7v7" />
            <path d="M12 7v4" />
            <path d="M16 7v9" />
        </svg>
    );
};
