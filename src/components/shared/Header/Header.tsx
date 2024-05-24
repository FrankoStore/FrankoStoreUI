"use client";

import { Container, HeaderMenu, LoginForm, RegisterForm } from "..";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { URLS } from "@/lib/constants";
import { checkIsAdmin } from "@/lib/utils";

import { useActiveUser } from "@/hooks/use-active-user";
import useUrlParams from "@/hooks/use-url-params";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    AdminDashboardIcon,
    BagIcon,
    LogoIcon,
    UserIcon,
} from "@/assets/icons";

const navigationLinks = [
    {
        path: URLS.ABOUT,
        title: "Про нас",
    },
    {
        path: URLS.CONTACTS,
        title: "Контакти",
    },
    {
        path: URLS.UNIVERCITY,
        title: "Університет",
    },
];

export const Header = () => {
    const [registerOpened, setRegisterOpened] = useState(false);
    const [loginOpened, setLoginOpened] = useState(false);
    const { user } = useActiveUser();
    const pathname = usePathname();
    const [searchValue, setSearchValue] = useUrlParams("search");

    return (
        <Container>
            <RegisterForm
                onClose={() => setRegisterOpened(false)}
                onSecondaryButtonClick={() => {
                    setRegisterOpened(false);
                    setLoginOpened(true);
                }}
                isVisible={registerOpened}
            />
            <LoginForm
                onClose={() => setLoginOpened(false)}
                onSecondaryButtonClick={() => {
                    setLoginOpened(false);
                    setRegisterOpened(true);
                }}
                isVisible={loginOpened}
            />
            <header className="header-grid h-[111px] items-center justify-between">
                <div className="flex gap-9 items-center">
                    <HeaderMenu />
                    <Link href={URLS.HOME}>
                        <LogoIcon />
                    </Link>
                </div>
                <nav className="justify-self-center flex gap-[65px]">
                    {navigationLinks.map((link, index) => {
                        const key = `${link.title}-${index}`;
                        return (
                            <Link
                                href={link.path}
                                key={key}
                                {...(index === navigationLinks.length - 1
                                    ? {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                      }
                                    : {})}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-8">
                    {pathname === "/shop" && (
                        <Input
                            value={searchValue ?? ""}
                            onChange={(e) =>
                                setSearchValue("search", e.target.value)
                            }
                            placeholder="Я шукаю..."
                            className="placeholder:opacity-70"
                        />
                    )}
                    {user && checkIsAdmin(user) && (
                        <Link href={URLS.ADMIN} className="text-[17px]">
                            <AdminDashboardIcon />
                        </Link>
                    )}
                    {user ? (
                        <Link className="text-[17px]" href={URLS.CABINET}>
                            <UserIcon />
                        </Link>
                    ) : (
                        <Button
                            variant="icon"
                            size="primary"
                            onClick={() => setLoginOpened(true)}
                        >
                            <UserIcon />
                        </Button>
                    )}
                    <Link className="text-[17px]" href={URLS.CART}>
                        <BagIcon />
                    </Link>
                </div>
            </header>
        </Container>
    );
};
