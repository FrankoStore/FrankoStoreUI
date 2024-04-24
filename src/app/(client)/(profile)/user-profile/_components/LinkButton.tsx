import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface LinkButtonPropsType {
    isActive?: boolean;
    onClick: () => void;
    title: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonPropsType> = (props) => {
    const { isActive, title, onClick } = props;

    return (
        <Button
            size="link"
            variant="lightLink"
            onClick={onClick}
            className={cn({ "font-medium": isActive })}
        >
            {title}
        </Button>
    );
};
