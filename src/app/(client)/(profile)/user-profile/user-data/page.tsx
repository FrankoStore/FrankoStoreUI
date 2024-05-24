"use client";

import { useActiveUser } from "@/hooks/use-active-user";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserDataPage = () => {
    const { user } = useActiveUser();
    return (
        <div>
            <div>
                <h3 className="font-medium text-[28px]">Мої дані</h3>
                <div className="mt-[40px] flex flex-col gap-[40px]">
                    <div className="max-w-[420px] w-full">
                        <Input
                            placeholder="Ім’я та Прізвище"
                            value={`${user?.firstName} ${user?.lastName}`}
                        />
                    </div>
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Телефон" value={user?.phone} />
                    </div>
                    <div className="max-w-[420px] w-full">
                        <Input
                            placeholder="Електронна пошта"
                            value={user?.email}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <h3 className="font-medium text-[28px]">Змінити пароль</h3>
                <div className="mt-[40px] flex flex-col gap-[40px]">
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Поточний пароль" />
                    </div>
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Новий пароль" />
                    </div>
                    <div className="max-w-[420px] w-full">
                        <Input placeholder="Підтвердьте пароль" />
                    </div>
                </div>
            </div>
            <Button className="max-w-[420px] w-full mt-[70px]">
                Зберегти зміни
            </Button>
        </div>
    );
};

export default UserDataPage;
