"use client";

import { Container, HeaderMenu, LoginForm, RegisterForm } from "..";
import Link from "next/link";
import React, { useState } from "react";

import { URLS } from "@/lib/constants";

import { Button } from "@/components/ui/button";

import { BagIcon, LogoIcon, SearchIcon, UserIcon } from "@/assets/icons";

const navigationLinks = [
    {
        path: URLS.ABOUT,
        title: "Про нас",
    },
    {
        path: URLS.ABOUT,
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

    return (
        <Container>
            <RegisterForm
                onOpen={() => {}}
                onClose={() => setRegisterOpened(false)}
                onSecondaryButtonClick={() => {
                    setRegisterOpened(false);
                    setLoginOpened(true);
                }}
                isVisible={registerOpened}
            />
            <LoginForm
                onSubmit={() => {}}
                onOpen={() => {}}
                onClose={() => setLoginOpened(false)}
                onSecondryButtonClick={() => {
                    setLoginOpened(false);
                    setRegisterOpened(true);
                }}
                isVisible={loginOpened}
            />
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
                    <Button variant="icon" size="primary">
                        <SearchIcon />
                    </Button>
                    <Button
                        variant="icon"
                        size="primary"
                        onClick={() => setLoginOpened(true)}
                    >
                        <UserIcon />
                    </Button>
                    <Link href={URLS.CART}>
                        <Button variant="icon" size="primary">
                            <BagIcon />
                        </Button>
                    </Link>
                </div>
            </header>
        </Container>
    );
};
