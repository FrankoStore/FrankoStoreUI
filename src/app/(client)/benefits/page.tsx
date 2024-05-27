import Image from "next/image";
import React from "react";

import { Container } from "@/components/shared";

import lnuBagImg from "@public/lnu_bag.webp";
import lnuNotepadImg from "@public/lnu_notepad.webp";
import lnuStickersImg from "@public/lnu_stickers.webp";

const Benefits = () => {
    return (
        <div className="hero-section-height">
            <Container className="flex justify-center relative h-full">
                <Image
                    src={lnuNotepadImg}
                    alt="LNU front view 360 years"
                    width={676}
                    height={714}
                    className="w-[200px] h-[224px] lg:w-[280px] lg:h-[300px] xl:w-[338px] xl:h-[368px] absolute bottom-[40%] lg:bottom-[20%] left-0 rounded-sm shadow-lg -z-10"
                />
                <Image
                    src={lnuStickersImg}
                    alt="LNU front view"
                    width={676}
                    height={642}
                    className="w-[200px] h-[224px] lg:w-[280px] lg:h-[300px] xl:w-[338px] xl:h-[368px] absolute top-[25%] lg:top-[15%] right-0 rounded-sm shadow-lg -z-10"
                />
                <Image
                    src={lnuBagImg}
                    alt="LNU top view"
                    width={676}
                    height={642}
                    className="w-[200px] h-[224px] lg:w-[338px] lg:h-[331px] absolute right-[40%] lg:right-[35%] bottom-[15%] lg:bottom-[5%] rounded-sm shadow-lg -z-10"
                />

                <div className="max-w-[480px] lg:max-w-[550px] w-full mt-[52px] xl:mt-[70px]">
                    <h2 className="text-[44px] lg:text-[55px] text-center uppercase">
                        Отримай вигоду!
                    </h2>
                    <p className="text-[17px] text-center leading-[1.2] mt-[30px] lg:mt-[60px]">
                        Сподіваємось, що система лояльності для покупців дасть
                        вам можливість отримати ще більше задоволення від
                        товарів з символікою ЛНУ ім. І. Франка.
                    </p>
                    <p className="text-[17px] text-center leading-[1.2] mt-6">
                        Для друзів FRANKOstore по домовленості діятиме
                        гарантована корпоративна знижка в залежності від
                        категорії товару.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Benefits;
