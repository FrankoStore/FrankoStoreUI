import CategoriesMenu from "./CategoriesMenu";
import HeaderMenuLinks from "./HeaderMenuLinks";
import Link from "next/link";
import React from "react";

import { URLS } from "@/lib/constants";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BurgerIcon, FacebookIcon, InstagramIcon } from "@/assets/icons";

export const HeaderMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="p-2">
                    <BurgerIcon />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className="w-[360px] lg:w-[480px] px-3"
            >
                <DropdownMenuGroup className="mt-5">
                    <CategoriesMenu />
                    <DropdownMenuSeparator />
                    <HeaderMenuLinks />
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
                        <Link
                            href={URLS.INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon fill="#000" />
                        </Link>
                        <Link
                            href={URLS.FACEBOOK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon fill="#000" />
                        </Link>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
