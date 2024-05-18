"use client";

import { Container, HeaderMenu, LoginForm, RegisterForm } from "..";
import { HeaderNav } from "./HeaderNav";
import { UserMenu } from "./UserMenu";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { URLS } from "@/lib/constants";

import { LogoIcon } from "@/assets/icons";

export const Header = () => {
    const [registerOpened, setRegisterOpened] = useState(false);
    const [loginOpened, setLoginOpened] = useState(false);
    const isLgScreen = useMediaQuery("(min-width: 1024px)");

    return (
        <>
            <Container>
                <header className="header-grid py-9 items-center justify-between">
                    <div className="flex gap-6 lg:gap-9 items-center">
                        <HeaderMenu />
                        <Link href={URLS.HOME}>
                            <LogoIcon width={isLgScreen ? undefined : "180"} />
                        </Link>
                    </div>

                    <HeaderNav />

                    <UserMenu openLogin={() => setLoginOpened(true)} />
                </header>
            </Container>

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
        </>
    );
};
