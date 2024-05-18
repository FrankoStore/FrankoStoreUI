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
                    className="w-[338px] h-[368px] absolute bottom-[20%] left-0 rounded-sm shadow-lg"
                />
                <Image
                    src={lnuStickersImg}
                    alt="LNU front view"
                    width={676}
                    height={642}
                    className="w-[338px] h-[341px] absolute top-[15%] right-0 rounded-sm shadow-lg"
                />
                <Image
                    src={lnuBagImg}
                    alt="LNU top view"
                    width={676}
                    height={642}
                    className="w-[338px] h-[331px] absolute right-[35%] bottom-[5%] rounded-sm shadow-lg"
                />

                <div className="max-w-[550px] w-full mt-[70px]">
                    <h2 className=" text-[55px] text-center uppercase">
                        Отримай вигоду!
                    </h2>
                    <p className="text-[17px] text-center leading-[1.2] mt-[60px]">
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
