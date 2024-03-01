import { AmountCounter, ProductSection, ProductSlider } from "./_components";
import React from "react";

import { Container, ProductCardList } from "@/components/shared";
import { Button } from "@/components/ui/button";

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
];

const images = ["ad", "add", "ada"];

interface ProductPagePropsType {
    params: {
        id: string;
    };
}

const characteristcs = [
    {
        key: "Розмір сумки",
        value: "42 см x 35см",
    },
    {
        key: "Довжина ручок",
        value: "12 см",
    },
    {
        key: "Склад тканини",
        value: "100% бавовна",
    },
    {
        key: "Колір",
        value: "синій",
    },
];

const Product: React.FC<ProductPagePropsType> = (props) => {
    const {
        params: { id },
    } = props;

    return (
        <Container>
            <div className="flex w-[85%] mx-auto gap-[60px]">
                <ProductSlider images={images} overrideContainerStyle="w-1/2" />
                <div className="w-1/2 flex flex-col">
                    <h3 className="text-[23px] font-semibold">
                        Екоторба “Сlassic”
                    </h3>
                    <h4 className="text-[23px] font-semibold">125 грн</h4>
                    <p className="text-[15px] mt-[20px]">
                        Легка та зручна еко-торба з оригінальним принтом –
                        чудовий та необхідний кожному аксесуар. Придбайте на
                        подарунок для всієї родини чи як сувенір для гостей
                        нашого міста, стильну та якісну річ! Еко-торба – це
                        модно! Будь у тренді!
                    </p>
                    <p className="text-[15px] mt-[7px]">
                        <b className="font-semibold">Від 10</b> одиниць товару
                        <b className="font-semibold">5% знижки!</b>
                    </p>
                    <div className="mt-[20px] flex flex-col gap-2">
                        {characteristcs.map((item, index) => {
                            const key = `${item.key}-${index}`;

                            return (
                                <p>
                                    <b className="font-semibold">{item.key}:</b>{" "}
                                    {item.value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold text-[17px]">Кількість:</p>
                        <AmountCounter overrideContainerStyle="mt-3" />
                    </div>
                    <div className="flex-1 flex items-end gap-[23px] mt-[10px]">
                        <Button>Купити зараз</Button>
                        <Button variant="outline">Додати в кошик</Button>
                    </div>
                </div>
            </div>
            <ProductSection
                items={cards}
                title="вам можуть сподобатись"
                overrideContainerStyle="mt-[100px]"
            />
        </Container>
    );
};

export default Product;
