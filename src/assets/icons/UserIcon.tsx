import { IconPropsType } from "@/types/IconPropsType";
import React from "react";

export const UserIcon: React.FC<IconPropsType> = (props) => {
    const { width = "14", height = "21", fill = "black" } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 21"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 1.71061C4.63104 1.71061 2.71061 3.63104 2.71061 6C2.71061 8.36896 4.63104 10.2894 7 10.2894C9.36896 10.2894 11.2894 8.36896 11.2894 6C11.2894 3.63104 9.36896 1.71061 7 1.71061ZM1 6C1 2.68629 3.68629 0 7 0C10.3137 0 13 2.68629 13 6C13 9.31371 10.3137 12 7 12C3.68629 12 1 9.31371 1 6Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 16.7762C0 13.5861 2.56054 11 5.71912 11H8.28088C11.4395 11 14 13.5861 14 16.7762V21H0V16.7762ZM5.71912 12.7206C3.50139 12.7206 1.70357 14.5363 1.70357 16.7762V19.2794H12.2964V16.7762C12.2964 14.5363 10.4986 12.7206 8.28088 12.7206H5.71912Z"
            />
        </svg>
    );
};
