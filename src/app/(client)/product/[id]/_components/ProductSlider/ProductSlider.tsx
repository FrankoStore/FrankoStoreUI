"use client";

import { IProductImage } from "@/types/Product.types";
import Image from "next/image";
import { useState } from "react";

import { cn, converToBase64 } from "@/lib/utils";

interface ProductSliderPropsType {
    images: IProductImage[];
    overrideContainerStyle?: string;
}

export const ProductSlider: React.FC<ProductSliderPropsType> = (props) => {
    const { images, overrideContainerStyle } = props;
    const [activeImage, setActiveImage] = useState(converToBase64(images[0]));

    return (
        <div className={cn("flex gap-[30px]", overrideContainerStyle)}>
            <div className="w-[82px] flex flex-col gap-5">
                {images.map((image, index) => {
                    return (
                        <Image
                            src={converToBase64(image)}
                            className="w-full h-[100px] aspect-[82/101] object-cover"
                            alt="Product image"
                            key={index}
                            width={200}
                            height={200}
                            onClick={() =>
                                setActiveImage(converToBase64(image))
                            }
                        />
                    );
                })}
            </div>
            <div className="flex-1 aspect-[420/515]">
                <Image
                    src={activeImage}
                    width={420}
                    height={515}
                    className="w-full h-full object-cover"
                    alt="Product image"
                />
            </div>
        </div>
    );
};
