import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { URLS } from "@/lib/constants";
import { checkIsAdmin } from "@/lib/utils";

import { useActiveUser } from "@/hooks/use-active-user";
import useUrlParams from "@/hooks/use-url-params";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AdminDashboardIcon, BagIcon, UserIcon } from "@/assets/icons";

type UserMenuProps = {
    openLogin: () => void;
};

export const UserMenu = ({ openLogin }: UserMenuProps) => {
    const { user } = useActiveUser();
    const pathname = usePathname();
    const [searchValue, setSearchValue] = useUrlParams("search");

    return (
        <div className="flex items-center gap-4 lg:gap-8">
            {pathname === "/shop" && (
                <Input
                    value={searchValue ?? ""}
                    onChange={(e) => setSearchValue("search", e.target.value)}
                    placeholder="Я шукаю..."
                    className="w-[110px] xl:w-full placeholder:opacity-70"
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
                <Button variant="icon" size="primary" onClick={openLogin}>
                    <UserIcon />
                </Button>
            )}
            <Link className="text-[17px]" href={URLS.CART}>
                <BagIcon />
            </Link>
        </div>
    );
};
