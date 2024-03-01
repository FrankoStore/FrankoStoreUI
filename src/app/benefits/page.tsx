import React from "react";

import { Container } from "@/components/shared";

const Benefits = () => {
    return (
        <div className="hero-section-height">
            <Container className="flex justify-center relative h-full">
                <div className="w-[308px] h-[425px] bg-[#D9D9D9] absolute bottom-[20%] left-0" />
                <div className="w-[338px] h-[271px] bg-[#D9D9D9] absolute top-[15%] right-0" />
                <div className="w-[450px] h-[220px] bg-[#D9D9D9] absolute bottom-[5%] right-[15%]" />
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
