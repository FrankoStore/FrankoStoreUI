"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();

    const routes = [
        {
            href: `/admin`,
            label: "Overview",
            active: pathname === `/admin`,
        },
        {
            href: `/admin/categories`,
            label: "Categories",
            active: pathname.startsWith(`/admin/categories`),
        },
        {
            href: `/admin/products`,
            label: "Products",
            active: pathname.startsWith(`/admin/products`),
        },
        {
            href: `/admin/orders`,
            label: "Orders",
            active: pathname.startsWith(`/admin/orders`),
        },
        {
            href: `/admin/procurements`,
            label: "Procurements",
            active: pathname.startsWith(`/admin/procurements`),
        },
        {
            href: `/admin/suppliers`,
            label: "Suppliers",
            active: pathname.startsWith(`/admin/suppliers`),
        },
        {
            href: "/",
            label: "Home",
            active: false,
        },
    ];

    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className,
            )}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active
                            ? "text-black dark:text-white"
                            : "text-muted-foreground",
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
}
