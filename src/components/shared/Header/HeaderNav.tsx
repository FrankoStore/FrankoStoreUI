import Link from "next/link";
import React from "react";

import { URLS } from "@/lib/constants";

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

export const HeaderNav = () => {
    return (
        <nav className="justify-self-center flex gap-[40px] lg:gap-[65px]">
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
    );
};
