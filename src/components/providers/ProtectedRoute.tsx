"use client";

import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { URLS } from "@/lib/constants";
import { checkIsAdmin } from "@/lib/utils";

import { useActiveUser } from "@/hooks/use-active-user";

const ProtectedRoute = ({
    children,
    isAdminRoute = false,
}: {
    children: ReactNode;
    isAdminRoute?: boolean;
}) => {
    const { user, isLoading } = useActiveUser();

    useEffect(() => {
        if (!isLoading) {
            if (!user || (isAdminRoute && !checkIsAdmin(user)))
                redirect(URLS.HOME);
        }
    }, [user, isLoading]);

    return children;
};

export default ProtectedRoute;
