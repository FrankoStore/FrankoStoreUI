import React from "react";

import { Container } from "@/components/shared";

const CheckoutPage = () => {
    return (
        <Container className="flex-1 flex flex-col items-center justify-center pt-[100px]">
            <p className="uppercase text-[35px] text-center text-darkblue">
                Дякуємо за ваше замовлення!
            </p>
            <p className="text-[20px] font-light text-center max-w-[560px] w-full mt-[50px]">
                Ми зв’яжемося з вами найближчим часом для підтвердження
                замовлення або надішлемо інформаційне SMS-повідомлення.
            </p>
        </Container>
    );
};

export default CheckoutPage;
