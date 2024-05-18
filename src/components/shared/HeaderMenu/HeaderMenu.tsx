import CategoriesMenu from "./CategoriesMenu";
import Link from "next/link";
import React from "react";

import { URLS } from "@/lib/constants";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BurgerIcon, FacebookIcon, InstagramIcon } from "@/assets/icons";

const menuItems = [
    {
        path: URLS.DISCOUNT,
        title: "акції",
    },
    {
        path: URLS.ABOUT,
        title: "про нас",
    },
    {
        path: URLS.CABINET,
        title: "особистий кабінет",
    },
];

export const HeaderMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="p-2">
                    <BurgerIcon />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[480px] px-3">
                <DropdownMenuGroup className="mt-5">
                    <CategoriesMenu />
                    <DropdownMenuSeparator />
                    {menuItems.map((item, index) => (
                        <React.Fragment key={item.title}>
                            <DropdownMenuItem className="uppercase text-[17px] font-semibold">
                                <Link
                                    className="w-full h-full"
                                    href={item.path}
                                >
                                    {item.title}
                                </Link>
                            </DropdownMenuItem>
                            {index !== menuItems.length - 1 && (
                                <DropdownMenuSeparator />
                            )}
                        </React.Fragment>
                    ))}
                </DropdownMenuGroup>
                <div className="mt-[40px] ml-1 mb-[20px]">
                    <p className="uppercase text-[20px] font-semibold">
                        контакти
                    </p>
                    <a className="mt-[10px] block" href="tel:+380983995574">
                        +380983995574
                    </a>
                    <a
                        href="mailto:frankostore@lnu.edu.ua"
                        className="underline block mt-[5px]"
                    >
                        frankostore@lnu.edu.ua
                    </a>
                    <div className="flex gap-[19px] mt-6">
                        <InstagramIcon fill="#000" />
                        <FacebookIcon fill="#000" />
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
