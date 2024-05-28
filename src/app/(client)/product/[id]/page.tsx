"use client";

import { AmountCounter, ProductSection, ProductSlider } from "./_components";
import { useGetProductsWithOptions } from "@/services/productService";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

import { URLS } from "@/lib/constants";

import { useOrder } from "@/hooks/use-active-order";
import { AddProductType, useCart } from "@/hooks/use-cart";

import { Container } from "@/components/shared";
import ProductCardSkeleton from "@/components/shared/ProductCard/ProductCardSkeleton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ProductPagePropsType {
    params: {
        id: string;
    };
}

const Product: React.FC<ProductPagePropsType> = ({ params: { id } }) => {
    const { data, isLoading } = useGetProductsWithOptions({ ids: [+id] });
    const { addProduct: addProductToOrder } = useOrder();
    const [quantity, setQuantity] = useState(1);
    const { addProduct } = useCart();
    const { data: products, isLoading: isProductsLoading } =
        useGetProductsWithOptions({
            take: 3,
        });
    const { toast } = useToast();
    const router = useRouter();

    if (isLoading) return null;
    if (!data?.length) redirect("/shop");

    const addProductToCart = (product: AddProductType) => {
        addProduct(product);
        toast({ title: "Товар успішно додано в корзину" });
    };

    const handleBuyNowClick = () => {
        addProductToOrder({ productId: +id, quantity });
        router.push(URLS.PLACE_ORDER);
    };

    const { name, description, retailPrice, images, height, width } = data[0];

    return (
        <Container>
            <div className="flex w-[85%] mx-auto gap-[60px]">
                <ProductSlider images={images} overrideContainerStyle="w-1/2" />
                <div className="w-1/2 flex flex-col">
                    <h3 className="text-[23px] font-semibold">{name}</h3>
                    <h4 className="text-[23px] font-semibold">
                        {retailPrice} грн
                    </h4>
                    <p
                        className="text-[15px] mt-[20px]"
                        dangerouslySetInnerHTML={{ __html: description ?? "" }}
                    />
                    <div className="mt-[20px] flex flex-col gap-2">
                        <p>
                            <b className="font-semibold">Розмір:&nbsp;</b>
                            {width}см x {height}см
                        </p>
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
                        <Button onClick={handleBuyNowClick}>
                            Купити зараз
                        </Button>
                        <Button
                            onClick={() =>
                                addProductToCart({ ...data[0], quantity })
                            }
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
