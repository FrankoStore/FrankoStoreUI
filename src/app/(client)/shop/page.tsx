"use client";

import { useGetCategoriesQuery } from "@/services/categoriesService";
import { useGetProductsWithOptions } from "@/services/productService";
import React, { useEffect, useState } from "react";

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

const sortOptions = [
    {
        value: "default",
        label: "Сортування за замовчуванням",
    },
    {
        value: "popularity",
        label: "Сортування за популярністю",
    },
    {
        value: "latest",
        label: "Сортування за останніми",
    },
    {
        value: "fromCheapest",
        label: "Сортування за ціною: від нижчої до вищої",
    },
    {
        value: "fromExpensive",
        label: "Сортування за ціною: від вищої до нижчої",
    },
] as const;

type SortOptionValue = (typeof sortOptions)[number]["value"];

const Shop = () => {
    const [selectedFilter, setSelectedFilter] =
        useState<SortOptionValue>("default");
    const [selectedCategory, setSelectedCategory] = useUrlParams("category");

    const { data: categories, getCategories } = useGetCategoriesQuery();
    const { data: products, isLoading } = useGetProductsWithOptions({
        take: 9,
        categories: selectedCategory ? { name: selectedCategory } : undefined,
    });
    const [displayedProducts, setDisplayedProducts] = useState(products);

    useEffect(() => {
        let sortedProducts;
        switch (selectedFilter) {
            case "fromCheapest":
                sortedProducts = products?.toSorted(
                    (firstProduct, secondProduct) =>
                        firstProduct.retailPrice - secondProduct.retailPrice,
                );
                break;
            case "fromExpensive":
                sortedProducts = products?.toSorted(
                    (firstProduct, secondProduct) =>
                        secondProduct.retailPrice - firstProduct.retailPrice,
                );
                break;
            case "default":
            case "latest":
            case "popularity":
            default:
                sortedProducts = [...(products ?? [])];
                break;
        }
        setDisplayedProducts(sortedProducts);
    }, [selectedFilter]);

    useEffect(() => {
        setDisplayedProducts(products);
    }, [products]);

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Container className="mt-[65px] flex">
            <div className="w-[200px] lg:w-[350px] flex flex-col gap-[30px] items-start">
                {categories?.map((category) => {
                    return (
                        <LinkButton
                            onClick={() =>
                                setSelectedCategory("category", category.name)
                            }
                            active={category.name === selectedCategory}
                            key={category.id}
                            className="text-[14px] lg:text-[17px]"
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
                            onValueChange={(newVal: SortOptionValue) =>
                                setSelectedFilter(newVal)
                            }
                        >
                            <SelectTrigger className="w-[250px] px-1 lg:px-3 lg:w-[378px] h-[45px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {sortOptions.map((option) => (
                                        <SelectItem
                                            value={option.value}
                                            key={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
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
                            items={displayedProducts}
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
