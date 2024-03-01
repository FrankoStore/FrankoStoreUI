"use client";

import React, { useState } from "react";

import { Container, LinkButton, ProductCardList } from "@/components/shared";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const cards = [
    {
        id: "1",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "2",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "3",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "4",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "5",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "6",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "7",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "8",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
    {
        id: "9",
        image: "",
        title: 'Екоторба “Сlassic"',
        price: "250 грн",
    },
];

const filters = [
    "екотовари",
    "канцелярське приладдя",
    "одяг",
    "сумки",
    "посуд",
    "аксесари",
    "набори",
    "лінійка 360",
];

const Shop = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("default");
    const [selectedCategory, setSelectedCategory] = useState<string>(
        filters[0],
    );

    return (
        <Container className="mt-[65px] flex">
            <div className="w-[350px] flex flex-col gap-[30px] items-start">
                {filters.map((filter, index) => {
                    const key = `${filter}-${index}`;

                    return (
                        <LinkButton
                            onClick={() => setSelectedCategory(filter)}
                            active={filter === selectedCategory}
                        >
                            {filter}
                        </LinkButton>
                    );
                })}
            </div>
            <div className="flex-1">
                <div className="flex justify-end">
                    <Select
                        value={selectedFilter}
                        onValueChange={(newVal) => setSelectedFilter(newVal)}
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
                </div>
                <div className="mt-[38px]">
                    <ProductCardList
                        items={cards}
                        buttonText="Переглянути всі товари"
                        loadMore={() => {}}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Shop;
