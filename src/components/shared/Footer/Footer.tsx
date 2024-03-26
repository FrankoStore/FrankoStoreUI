import { Container } from "@shared";
import Image from "next/image";
import Link from "next/link";

import { URLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { FacebookIcon, InstagramIcon, LogoIcon } from "@/assets/icons";
import LNULogo from "@public/lnu_logo.png";

const navigationItems = [
    {
        path: "/about",
        title: "про нас",
    },
    {
        path: "/user-profile",
        title: "особистий кабінет",
    },
    {
        path: URLS.UNIVERCITY,
        title: "університет",
    },
];

interface FooterPropsType {
    overrideContainerStyle?: string;
}

export const Footer: React.FC<FooterPropsType> = (props) => {
    const { overrideContainerStyle } = props;

    return (
        <footer
            className={cn(
                "bg-darkblue pt-[67px] pb-[135px]",
                overrideContainerStyle,
            )}
        >
            <Container className="flex justify-between">
                <div>
                    <LogoIcon fill="#fff" />
                    <Image className="mt-5" src={LNULogo} alt="LNU image" />
                </div>
                <div className="flex gap-[165px]">
                    <div className="flex flex-col gap-5">
                        {navigationItems.map((link, index) => {
                            const key = `${link.title}-${index}`;
                            return (
                                <Link
                                    href={link.path}
                                    className="uppercase text-white"
                                    key={key}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="uppercase text-white font-bold">
                            контакти
                        </h3>
                        <a href="tel:+380983995574" className="text-white mt-6">
                            +380983995574
                        </a>
                        <a
                            href="mailto:frankostore@lnu.edu.ua"
                            className="text-white underline mt-2"
                        >
                            frankostore@lnu.edu.ua
                        </a>
                        <div className="flex gap-5 mt-6">
                            <InstagramIcon />
                            <FacebookIcon />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
