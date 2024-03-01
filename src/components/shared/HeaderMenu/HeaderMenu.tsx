"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BurgerIcon, FacebookIcon, InstagramIcon } from "@/assets/icons";

const menuItems = [
    {
        path: "/",
        title: "екотовари",
    },
    {
        path: "/",
        title: "канцелярське приладдя",
    },
    {
        path: "/",
        title: "одяг",
    },
    {
        path: "/",
        title: "сумки",
    },
    {
        path: "/",
        title: "посуд",
    },
    {
        path: "/",
        title: "оаксесуаридяг",
    },
    {
        path: "/",
        title: "набори",
    },
    {
        path: "/",
        title: "лінійка 360",
    },
    {
        path: "/",
        title: "акції",
    },
    {
        path: "/",
        title: "про нас",
    },
    {
        path: "/",
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
                <DropdownMenuGroup>
                    {menuItems.map((item, index) => {
                        const key = `${item.path}-${index}`;
                        return (
                            <React.Fragment key={key}>
                                <DropdownMenuItem className="uppercase text-[17px] font-semibold">
                                    {item.title}
                                </DropdownMenuItem>
                                {index !== menuItems.length - 1 && (
                                    <DropdownMenuSeparator />
                                )}
                            </React.Fragment>
                        );
                    })}
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
