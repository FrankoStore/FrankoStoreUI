import { IconPropsType } from "@/types/IconPropsType";
import React from "react";

export const BurgerIcon: React.FC<IconPropsType> = (props) => {
    const { width = "22", height = "18", fill = "black" } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 18"
            stroke={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1H21" stroke-width="2" stroke-linecap="round" />
            <path d="M1 9H21" stroke-width="2" stroke-linecap="round" />
            <path d="M1 17H21" stroke-width="2" stroke-linecap="round" />
        </svg>
    );
};
