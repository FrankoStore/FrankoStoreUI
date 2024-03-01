"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import BagImage from "@public/product.png";

interface ProductSliderPropsType {
    images: string[];
    overrideContainerStyle?: string;
}

export const ProductSlider: React.FC<ProductSliderPropsType> = (props) => {
    const { images, overrideContainerStyle } = props;

    return (
        <div className={cn("flex gap-[30px]", overrideContainerStyle)}>
            <div className="w-[82px] flex flex-col gap-5">
                {images.map((image, index) => {
                    const key = `${image}-${index}`;

                    return (
                        <Image
                            src={BagImage}
                            className="w-full h-[100px] aspect-[82/101] object-cover"
                            alt="Product image"
                        />
                    );
                })}
            </div>
            <div className="flex-1 aspect-[420/515]">
                <Image
                    src={BagImage}
                    className="w-full h-full object-cover"
                    alt="Product image"
                />
            </div>
        </div>
    );
};
