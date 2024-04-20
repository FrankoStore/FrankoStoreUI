"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";
import { useGetProductsWithOptions } from "@/services/productService";
import React, { useState } from "react";

import useUrlParams from "@/hooks/use-url-params";

import { Container, LinkButton, ProductCardList } from "@/components/shared";
import ProductCardSkeleton from "@/components/shared/ProductCard/ProductCardSkeleton";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSkeleton,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Shop = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("default");
    const { selectedQuery, setUrlParams } = useUrlParams("category");

    const { data: categories } = useGetCategoriesQuery();
    const { data: products, isLoading } = useGetProductsWithOptions({
        take: 9,
        categories: selectedQuery ? { name: selectedQuery } : undefined,
    });

    return (
        <Container className="mt-[65px] flex">
            <div className="w-[350px] flex flex-col gap-[30px] items-start">
                {categories?.map((category) => {
                    return (
                        <LinkButton
                            onClick={() =>
                                setUrlParams("category", category.name)
                            }
                            active={category.name === selectedQuery}
                            key={category.id}
                        >
                            {category.name}
                        </LinkButton>
                    );
                })}
            </div>
            <div className="flex-1">
                <div className="flex justify-end">
                    {isLoading ? (
                        <SelectSkeleton />
                    ) : (
                        <Select
                            value={selectedFilter}
                            onValueChange={(newVal) =>
                                setSelectedFilter(newVal)
                            }
                        >
                            <SelectTrigger className="w-[378px] h-[45px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="default">
                                        Сортування за замовчуванням
                                    </SelectItem>
                                    <SelectItem value="popularity">
                                        Сортування за популярністю
                                    </SelectItem>
                                    <SelectItem value="latest">
                                        Сортування за останніми
                                    </SelectItem>
                                    <SelectItem value="fromCheapest">
                                        Сортування за ціною: від нижчої до вищої
                                    </SelectItem>
                                    <SelectItem value="fromExpensive">
                                        Сортування за ціною: від вищої до нижчої
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                </div>

                <div className="mt-[38px]">
                    {isLoading ? (
                        <div className="grid card-list-grid-columns justify-between">
                            {Array.from({ length: 6 }).map(
                                (_: any, idx: number) => (
                                    <ProductCardSkeleton key={idx} />
                                ),
                            )}
                        </div>
                    ) : (
                        <ProductCardList
                            items={products}
                            buttonText="Переглянути всі товари"
                            loadMore={() => {}}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Shop;
