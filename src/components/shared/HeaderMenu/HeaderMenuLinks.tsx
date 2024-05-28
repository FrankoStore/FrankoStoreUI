import Link from "next/link";
import React, { cloneElement } from "react";

import { URLS } from "@/lib/constants";

import { useActiveUser } from "@/hooks/use-active-user";

import {
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { DiscountIcon, StoreIcon, UserConfigIcon } from "@/assets/icons";

const menuItems = [
    {
        path: URLS.DISCOUNT,
        title: "акції",
        icon: <DiscountIcon />,
    },
    {
        path: URLS.ABOUT,
        title: "про нас",
        icon: <StoreIcon />,
    },
    {
        path: URLS.CABINET,
        title: "особистий кабінет",
        icon: <UserConfigIcon />,
    },
];

const HeaderMenuLinks = () => {
    const { user } = useActiveUser();

    return (user ? menuItems : menuItems.slice(0, 2)).map((item, index) => (
        <React.Fragment key={item.title}>
            <DropdownMenuItem className="uppercase text-[17px] font-semibold">
                <Link
                    className="w-full h-full inline-flex items-center gap-2"
                    href={item.path}
                >
                    {cloneElement(item.icon, {
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                    })}
                    {item.title}
                </Link>
            </DropdownMenuItem>
            {index !== menuItems.length - 1 && <DropdownMenuSeparator />}
        </React.Fragment>
    ));
};

export default HeaderMenuLinks;
