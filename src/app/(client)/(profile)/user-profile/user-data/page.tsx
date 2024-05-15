"use client";

import { useState } from "react";

import { useActiveUser } from "@/hooks/use-active-user";

import { ResetPasswordForm } from "../_components/ResetPasswordForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserDataPage = () => {
    const { user } = useActiveUser();
    const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);
    return (
        <>
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
                <div className="flex flex-col gap-4 mt-[100px]">
                    <Button
                        onClick={() => setResetPasswordVisible(true)}
                        className="max-w-[420px] w-full bg-red-500"
                    >
                        Змінити пароль
                    </Button>
                    <Button className="max-w-[420px] w-full">
                        Зберегти зміни
                    </Button>
                </div>
            </div>
            <ResetPasswordForm
                isVisible={isResetPasswordVisible}
                onClose={() => setResetPasswordVisible(false)}
            />
        </>
    );
};

export default UserDataPage;
