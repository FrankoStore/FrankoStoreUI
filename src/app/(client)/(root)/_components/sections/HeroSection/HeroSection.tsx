import Image from "next/image";
import React from "react";

import homeHeroInnerImage from "@public/homeHeroInner.webp";
import homeHeroOuterImage from "@public/homeHeroOuter.png";

export const HeroSection = () => {
    return (
        <>
            <div className="w-1/2 flex items-center justify-center relative">
                <h1 className="text-[48px] lg:text-[65px] text-center uppercase leading-[1.2]">
                    Брендова
                    <br /> продукція <br /> <i>ЛНУ імені</i> <br />{" "}
                    <i>івана франка</i>
                </h1>
                <p className="absolute bottom-[10%] max-w-[445px] text-center text-[16px] lg:text-[20px] font-light leading-[1.2]">
                    Вас вітає FRANKOstore – офіційна крамничка з брендованою
                    продукцією ЛНУ ім. І. Франка.
                </p>
            </div>
            <div className="w-1/2 relative flex items-center justify-center">
                <Image
                    src={homeHeroOuterImage}
                    className="w-full h-full object-cover rounded-l-sm"
                    alt="Hero outer"
                    priority
                />
                <Image
                    src={homeHeroInnerImage}
                    className="absolute w-[320px] lg:w-[380px] rounded-sm shadow-[inset_0px_0px_10px_10px_rgba(0,0,0,0.7)]"
                    alt="Hero inner"
                    width={1667}
                    height={2500}
                />
            </div>
        </>
    );
};
