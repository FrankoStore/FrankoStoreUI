"use client";

import { AmountCounter, ProductSection, ProductSlider } from "./_components";
import { useGetProductsWithOptions } from "@/services/productService";
import React, { useState } from "react";

import { useCart } from "@/hooks/use-cart";

import { Container } from "@/components/shared";
import ProductCardSkeleton from "@/components/shared/ProductCard/ProductCardSkeleton";
import { Button } from "@/components/ui/button";

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

    const { data, isLoading } = useGetProductsWithOptions({ ids: [+id] });
    const [quantity, setQuantity] = useState(1);
    const { addProduct } = useCart();
    const { data: products, isLoading: isProductsLoading } =
        useGetProductsWithOptions({
            take: 3,
        });

    if (isLoading) return null;

    const { name, description, retailPrice } = data[0];
    return (
        <Container>
            <div className="flex w-[85%] mx-auto gap-[60px]">
                <ProductSlider images={images} overrideContainerStyle="w-1/2" />
                <div className="w-1/2 flex flex-col">
                    <h3 className="text-[23px] font-semibold">{name}</h3>
                    <h4 className="text-[23px] font-semibold">
                        {retailPrice} грн
                    </h4>
                    <p className="text-[15px] mt-[20px]">{description}</p>
                    <p className="text-[15px] mt-[7px]">
                        <b className="font-semibold">Від 10</b> одиниць товару
                        <b className="font-semibold">5% знижки!</b>
                    </p>
                    <div className="mt-[20px] flex flex-col gap-2">
                        {characteristcs.map((item, index) => {
                            const key = `${item.key}-${index}`;

                            return (
                                <p key={key}>
                                    <b className="font-semibold">{item.key}:</b>{" "}
                                    {item.value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold text-[17px]">Кількість:</p>
                        <AmountCounter
                            overrideContainerStyle="mt-3"
                            value={quantity}
                            onChange={setQuantity}
                        />
                    </div>
                    <div className="flex-1 flex items-end gap-[23px] mt-[10px]">
                        <Button>Купити зараз</Button>
                        <Button
                            onClick={() => addProduct({ ...data[0], quantity })}
                            variant="outline"
                        >
                            Додати в кошик
                        </Button>
                    </div>
                </div>
            </div>
            {isProductsLoading ? (
                <div className="grid card-list-grid-columns justify-between">
                    {Array.from({ length: 3 }).map((_: any, idx: number) => (
                        <ProductCardSkeleton key={idx} />
                    ))}
                </div>
            ) : (
                <ProductSection
                    items={products}
                    title="вам можуть сподобатись"
                    overrideContainerStyle="mt-[100px]"
                />
            )}
        </Container>
    );
};

export default Product;
