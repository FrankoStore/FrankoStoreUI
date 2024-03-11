import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DeliveryAddressPage = () => {
    return (
        <div>
            <h2 className="font-medium text-[28px]">Адреси доставки</h2>
            <div className="mt-[40px]">
                <RadioGroup className="flex gap-[60px]">
                    <div className="flex gap-4">
                        <RadioGroupItem value="preset" id="preset" />
                        <Label
                            htmlFor="preset"
                            className="text-[17] font-light flex flex-col gap-2"
                        >
                            <p className="font-medium">Ім’я Прізвище</p>
                            <p>Вулиця 34</p>
                            <p>2345 Львів, Львівська область</p>
                            <p>Телефон +380965783432</p>
                        </Label>
                    </div>
                    <div className="flex gap-4">
                        <RadioGroupItem value="new-address" id="new-address" />
                        <Label
                            htmlFor="new-address"
                            className="text-[17] font-medium flex flex-col gap-2"
                        >
                            Введіть нову адресу
                        </Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="mt-[60px] flex flex-col gap-[50px]">
                <div className="max-w-[420px] w-full">
                    <Input placeholder="Ім’я та Прізвище" />
                </div>
                <div className="max-w-[420px] w-full">
                    <Input placeholder="Телефон" />
                </div>
                <div className="flex gap-[30px]">
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Місто" />
                    </div>
                    <div className="max-w-[307px] w-full">
                        <Input placeholder="Поштовий індекс" />
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Вулиця" />
                    </div>
                    <div className="max-w-[307px] w-full">
                        <Input placeholder="Номер будинку/квартири" />
                    </div>
                </div>
            </div>
            <Button className="max-w-[420px] w-full mt-[70px]">
                Зберегти зміни
            </Button>
        </div>
    );
};

export default DeliveryAddressPage;
