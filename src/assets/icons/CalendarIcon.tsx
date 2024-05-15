import { IconPropsType } from "@/types/IconPropsType";

export const CalendarIcon = ({
    width = "16",
    height = "16",
    className,
    fill = "#09090B",
}: IconPropsType) => {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    );
};
