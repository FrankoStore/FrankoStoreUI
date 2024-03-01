import { Container, HeaderMenu } from "..";
import Link from "next/link";
import React from "react";

import {
    BagIcon,
    BurgerIcon,
    LogoIcon,
    SearchIcon,
    UserIcon,
} from "@/assets/icons";

const navigationLinks = [
    {
        path: "/about",
        title: "Про нас",
    },
    {
        path: "/contacts",
        title: "Контакти",
    },
    {
        path: "/university",
        title: "Університет",
    },
];

export const Header = () => {
    return (
        <Container>
            <header className="header-grid h-[111px] items-center justify-between">
                <div className="flex gap-9 items-center">
                    <HeaderMenu />
                    <LogoIcon />
                </div>
                <nav className="justify-self-center flex gap-[65px]">
                    {navigationLinks.map((link, index) => {
                        const key = `${link.title}-${index}`;
                        return (
                            <Link href={link.path} key={key}>
                                {link.title}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-8">
                    <SearchIcon />
                    <UserIcon />
                    <BagIcon />
                </div>
            </header>
        </Container>
    );
};
