import Image from "next/image";
import React from "react";

import homeHeroInnerImage from "@public/homeHeroInner.png";
import homeHeroOuterImage from "@public/homeHeroOuter.png";

export const HeroSection = () => {
    return (
        <>
            <div className="w-1/2 flex items-center justify-center relative">
                <p className="text-[65px] text-center uppercase leading-[1.2]">
                    Брендова
                    <br /> продукція <br /> <i>ЛНУ імені</i> <br />{" "}
                    <i>івана франка</i>
                </p>
                <p className="absolute bottom-[10%] max-w-[445px] text-center text-[20px] font-light leading-[1.2]">
                    Вас вітає FRANKOstore – офіційна крамничка з брендованою
                    продукцією ЛНУ ім. І. Франка.
                </p>
            </div>
            <div className="w-1/2 relative flex items-center justify-center">
                <Image
                    src={homeHeroOuterImage}
                    className="w-full h-full object-cover"
                    alt="Hero outer"
                />
                <Image
                    src={homeHeroInnerImage}
                    className="absolute "
                    alt="Hero inner"
                />
            </div>
        </>
    );
};
