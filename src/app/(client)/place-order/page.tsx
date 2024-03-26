import Link from "next/link";
import React from "react";

import { URLS } from "@/lib/constants";

import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const PlaceOrderPage = () => {
    return (
        <Container className="pt-[70px]">
            <h2 className="uppercase text-darkblue text-[35px]">
                Оформлення замовлення
            </h2>
            <div className="pt-[80px] flex gap-[300px]">
                <div className="max-w-[420px] w-full">
                    <p className="font-medium text-[28px]">Платіжні дані</p>
                    <div className="mt-[48px] flex flex-col gap-[30px]">
                        <Input placeholder="Ім’я та Прізвище" />
                        <Input placeholder="Телефон" />
                        <Input placeholder="Електронна пошта" />
                    </div>
                </div>
                <div className="max-w-[533px] w-full">
                    <p className="font-medium text-[28px]">Ваше замовлення</p>
                    <div className="mt-[48px]">
                        <div className="flex justify-between font-light">
                            <p className="text-[23px]">Товар</p>
                            <p className="text-[23px]">Проміжний підсумок</p>
                        </div>
                        <div className="mt-[28px]">
                            <div className="border-b-[1px] border-b-black flex justify-between pb-2 mt-[20px]">
                                <div className="flex gap-1 text-[17px]">
                                    <p>Екоторба “Сlassic”</p>
                                    <p>×1</p>
                                </div>
                                <p className="text-[17px]">125 грн</p>
                            </div>
                            <div className="border-b-[1px] border-b-black flex justify-between pb-2 mt-[20px]">
                                <div className="flex gap-1 text-[17px]">
                                    <p>Футболка</p>
                                    <p>×2</p>
                                </div>
                                <p className="text-[17px]">1100 грн</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <p className="text-[23px]">Проміжний підсумок</p>
                            <p className="text-[17px]">1225 грн</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-[150px]">
                <div className="mr-[90px]">
                    <p className="font-medium text-[28px]">Доставка</p>
                </div>
                <div className="pt-3">
                    <div className="flex gap-[30px] items-center">
                        <div className="flex items-center gap-2 w-[350px]">
                            <Checkbox id="nova-poshta" />
                            <label
                                htmlFor="remember"
                                className="text-[17px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Доставка Новою поштою
                            </label>
                        </div>
                        <div className="flex items-center gap-2 w-[350px]">
                            <Checkbox id="self-delivery" />
                            <label
                                htmlFor="remember"
                                className="text-[17px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Самовивіз з магазину
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-[30px] items-center mt-[30px]">
                        <div className="flex items-center gap-2 w-[350px]">
                            <Input placeholder="Виберіть місто доставки" />
                        </div>
                        <div className="flex items-center gap-2 w-[350px]">
                            <Input placeholder="Поштовий індекс" />
                        </div>
                    </div>
                    <div className="flex gap-[30px] items-center mt-[30px]">
                        <div className="flex items-center gap-2 w-[350px]">
                            <Input placeholder="Вулиця" />
                        </div>
                        <div className="flex items-center gap-2 w-[350px]">
                            <Input placeholder="Номер будинку/квартири" />
                        </div>
                    </div>
                    <div className="flex gap-[30px] items-center mt-[30px]">
                        <div className="flex items-center gap-2 w-[350px]">
                            <Input placeholder="Оберіть відділення" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[140px]">
                <h2 className="font-medium text-[28px]">
                    До оплати: 1 225 грн
                </h2>
                <div className="flex flex-col gap-[23px] mt-[60px]">
                    <div className="flex items-center gap-4">
                        <Checkbox id="card-payment" />
                        <label
                            htmlFor="remember"
                            className="text-[15px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Оплата карткою, Apple або Google Pay Безпечна оплата
                            кредитною/дебетовою карткою або Apple/Google Pay за
                            допомогою Fondy
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <Checkbox id="card-payment" />
                        <label
                            htmlFor="on-receive"
                            className="text-[15px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Оплата при отриманні
                        </label>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <Checkbox id="card-payment" />
                        <label
                            htmlFor="personal-data"
                            className="text-[15px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            При оформленні замовлення ви погоджуєтеся на обробку
                            своїх персональних даних та іншу інформацію, описану
                            на сторінці політика конфіденційності.
                        </label>
                    </div>
                </div>
            </div>
            <Button className="max-w-[450px] w-full mt-[60px]">
                <Link href={URLS.CHECKOUT}>Оформити замовлення</Link>
            </Button>
        </Container>
    );
};

export default PlaceOrderPage;
