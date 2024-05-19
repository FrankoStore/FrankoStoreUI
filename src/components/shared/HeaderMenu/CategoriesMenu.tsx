"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";
import Link from "next/link";
import React, { useEffect } from "react";

import { URLS } from "@/lib/constants";

import {
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

import { ListItemIcon } from "@/assets/icons";

const CategoriesMenu = () => {
    const { data, getCategories } = useGetCategoriesQuery();

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger className="inline-flex items-center gap-2 w-full uppercase text-[17px] font-semibold">
                <ListItemIcon width="16" height="16" fill="currentColor" />
                Категорії
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent className="p-3">
                    {data?.map((item, index) => {
                        return (
                            <React.Fragment key={item.name}>
                                <DropdownMenuItem className="uppercase text-[17px] font-semibold">
                                    <Link
                                        href={`${URLS.SHOP}?category=${item.name}`}
                                        className="w-full h-full"
                                    >
                                        {item.name}
                                    </Link>
                                </DropdownMenuItem>
                                {index !== data.length - 1 && (
                                    <DropdownMenuSeparator />
                                )}
                            </React.Fragment>
                        );
                    })}
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
};

export default CategoriesMenu;
