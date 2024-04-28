import Image from "next/image";
import React from "react";

import { Container } from "@/components/shared";

import lnuFront360Img from "@public/lnu-front-360.jpeg";
import lnuFronImg from "@public/lnu-front.jpeg";
import lnuTopViewImg from "@public/lnu-top-view.png";

const Benefits = () => {
    return (
        <div className="hero-section-height">
            <Container className="flex justify-center relative h-full">
                <Image
                    src={lnuFront360Img}
                    alt="LNU front view 360 years"
                    width={676}
                    height={614}
                    className="w-[338px] h-[308px] absolute bottom-[20%] left-0"
                />
                <Image
                    src={lnuFronImg}
                    alt="LNU front view"
                    width={676}
                    height={542}
                    className="w-[338px] h-[271px] absolute top-[15%] right-0"
                />
                <Image
                    src={lnuTopViewImg}
                    alt="LNU top view"
                    width={676}
                    height={542}
                    className="w-[338px] h-[271px] absolute right-[15%] bottom-[5%]"
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
