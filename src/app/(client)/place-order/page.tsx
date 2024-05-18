"use client";

import React from "react";

import { URLS } from "@/lib/constants";

import { useActiveUser } from "@/hooks/use-active-user";
import { useCart } from "@/hooks/use-cart";

import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PlaceOrderPage = () => {
    const { products } = useCart();
    const { user } = useActiveUser();

    return (
        <Container className="pt-[70px]">
            <h2 className="uppercase text-darkblue text-[35px]">
                Оформлення замовлення
            </h2>
            <div className="pt-[80px] flex gap-[300px]">
                <div className="max-w-[420px] w-full">
                    <p className="font-medium text-[28px]">Платіжні дані</p>
                    <div className="mt-[48px] flex flex-col gap-[30px]">
                        <Input
                            placeholder="Ім’я та Прізвище"
                            value={
                                user ? `${user.firstName} ${user.lastName}` : ""
                            }
                        />
                        <Input placeholder="Телефон" value={user?.phone} />
                        <Input
                            placeholder="Електронна пошта"
                            value={user?.email}
                        />
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
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="border-b-[1px] border-b-black flex justify-between pb-2 mt-[20px]"
                                >
                                    <div className="flex gap-1 text-[17px]">
                                        <p>{product.name}</p>
                                        <p>×{product.quantity}</p>
                                    </div>
                                    <p className="text-[17px]">
                                        {product.retailPrice} грн
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-6">
                            <p className="text-[23px]">Проміжний підсумок</p>
                            <p className="text-[17px]">
                                {products.reduce(
                                    (acc, order) =>
                                        acc +
                                        (order.retailPrice ?? 0) *
                                            order.quantity,
                                    0,
                                )}
                                грн
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-[150px]">
                <p className="font-medium text-[28px] mr-[90px]">Доставка</p>
                <div className="pt-3">
                    <RadioGroup className="flex gap-[30px] items-center">
                        <div className="flex items-center gap-2 w-[350px]">
                            <RadioGroupItem
                                value="nova-poshta"
                                id="nova-poshta"
                                className="rounded-none w-5 h-5"
                            />
                            <Label
                                htmlFor="nova-poshta"
                                className="text-[17px] leading-none peer-disabled:opacity-70 font-normal cursor-pointer"
                            >
                                Доставка Новою поштою
                            </Label>
                        </div>
                        <div className="flex items-center gap-2 w-[350px]">
                            <RadioGroupItem
                                value="self-delivery"
                                id="self-delivery"
                                className="rounded-none w-5 h-5"
                            />
                            <Label
                                htmlFor="self-delivery"
                                className="text-[17px] leading-none peer-disabled:opacity-70 font-normal cursor-pointer"
                            >
                                Самовивіз з магазину
                            </Label>
                        </div>
                    </RadioGroup>
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
                    До оплати:&nbsp;
                    {
                        products.reduce(
                            (acc, order) =>
                                acc + (order.retailPrice ?? 0) * order.quantity,
                            0,
                        ) /** + доставка */
                    }
                    &nbsp;грн
                </h2>
                <div className="flex flex-col gap-[23px] mt-[60px]">
                    <RadioGroup className="gap-[23px]">
                        <div className="flex items-center gap-4">
                            <RadioGroupItem
                                value="card-payment"
                                id="card-payment"
                                className="rounded-none w-5 h-5"
                            />
                            <Label
                                htmlFor="card-payment"
                                className="text-[15px] leading-none peer-disabled:opacity-70 font-normal cursor-pointer whitespace-nowrap"
                            >
                                Оплата карткою, Apple або Google Pay Безпечна
                                оплата кредитною/дебетовою карткою або
                                Apple/Google Pay за допомогою Fondy
                            </Label>
                        </div>
                        <div className="flex items-center gap-4">
                            <RadioGroupItem
                                value="on-receive"
                                id="on-receive"
                                className="rounded-none w-5 h-5"
                            />
                            <Label
                                htmlFor="on-receive"
                                className="text-[15px] leading-none peer-disabled:opacity-70 font-normal cursor-pointer whitespace-nowrap"
                            >
                                Оплата при отриманні
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="flex items-center gap-4 ">
                        <Checkbox id="personal-data" required />
                        <label
                            htmlFor="personal-data"
                            className="text-[15px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            При оформленні замовлення ви погоджуєтеся на обробку
                            своїх персональних даних та іншу інформацію, описану
                            на сторінці політика конфіденційності.
                        </label>
                    </div>
                </div>
            </div>
            <Button type="submit" className="max-w-[450px] w-full mt-[60px]">
                Оформити замовлення
            </Button>
            {/* <Button className="max-w-[450px] w-full mt-[60px]">
                <Link href={URLS.CHECKOUT}>Оформити замовлення</Link>
            </Button> */}
        </Container>
    );
};

export default PlaceOrderPage;
