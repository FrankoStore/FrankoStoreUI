"use client";

import { useRegisterUser } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, SearchIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";

interface RegisterFormPropsType {
    onClose?: () => void;
    onSecondaryButtonClick?: () => void;
    isVisible?: boolean;
}

const formSchema = z
    .object({
        firstAndLastName: z
            .string()
            .min(1, { message: "Прізвище та ім'я є обв'язковим" })
            .refine((value) => value.trim().split(" ").length === 2, {
                message: "Ім'я та прізвище не корректні",
            }),
        username: z
            .string()
            .min(1, { message: "Ім'я користувача є обв'язковим" }),
        phoneNumber: z
            .string()
            .regex(/^\+380\d{9}$/, { message: "Некоректний номер" }),
        email: z.string().email({ message: "Некоректна пошта" }),
        password: z
            .string()
            .min(1, { message: "Пароль є обв'язковим" })
            .min(8, { message: "Пароль має містити хоча б 8 символів" }),
        passwordConfirm: z
            .string()
            .min(1, { message: "Підтвердження паролю є обв'язковим" })
            .min(8, {
                message: "Підтвердження паролю має містити хоча б 8 символів",
            }),
    })
    .superRefine(({ password, passwordConfirm }, ctx) => {
        if (passwordConfirm.trim() !== password.trim()) {
            ctx.addIssue({
                code: "custom",
                message: "Паролі не збігаються",
            });
        }
    });

export const RegisterForm: React.FC<RegisterFormPropsType> = (props) => {
    const { onClose, onSecondaryButtonClick, isVisible } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    const { toast } = useToast();

    const { registerUser } = useRegisterUser();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstAndLastName: "",
            username: "",
            phoneNumber: "",
            email: "",
            password: "",
            passwordConfirm: "",
        },
        mode: "onSubmit",
    });

    const handleSecondaryButtonClick = () => {
        onClose?.();
        onSecondaryButtonClick?.();
    };

    const handleClose = () => {
        onClose?.();
    };

    useEffect(() => {
        if (!form.formState.isValid) {
            const errors = Object.values(form?.formState?.errors)?.map(
                (item) => item.message,
            );
            const firstError = errors[0];
            toast({ description: firstError });
        }
    }, [form.formState.submitCount]);

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
        values: z.infer<typeof formSchema>,
    ) => {
        const registerData = {
            firstName: values.firstAndLastName.split(" ")[0],
            lastName: values.firstAndLastName.split(" ")[1],
            username: values.username,
            email: values.email,
            phone: values.phoneNumber,
            password: values.password,
        };

        try {
            await registerUser(registerData);
            toast({ title: "Користувач зареєстрований" });
            handleClose();
            form.reset();
        } catch (e) {
            toast({ title: "Помилка реєстрації" });
        }
    };

    return (
        <Dialog open={isVisible}>
            <DialogContent
                className="sm:max-w-[580px] rounded-none p-0"
                onInteractOutside={() => handleClose()}
                onEscapeKeyDown={() => handleClose()}
            >
                <DialogHeader className="py-[20px] border-b-[1px] border-b-black">
                    <div className="max-w-[420px] w-full mx-auto flex items-center justify-between">
                        <DialogTitle className="text-[28px] text-darkblue">
                            Реєстрація
                        </DialogTitle>
                        <DialogClose onClick={onClose}>
                            <X size={30} />
                        </DialogClose>
                    </div>
                </DialogHeader>
                <div className="max-w-[420px] w-full mx-auto mt-10">
                    <Form {...form}>
                        <form
                            id="registerForm"
                            className="flex flex-col gap-[35px]"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="firstAndLastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Ваше ім'я та прізвище"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Ім'я користувача"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Телефон"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Електронна пошта"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Пароль"
                                                        type={
                                                            isPasswordVisible
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        {...field}
                                                    />
                                                    <div
                                                        onClick={() =>
                                                            setIsPasswordVisible(
                                                                !isPasswordVisible,
                                                            )
                                                        }
                                                        className="absolute right-2 top-[10px] cursor-pointer"
                                                    >
                                                        {isPasswordVisible ? (
                                                            <EyeIcon className="bg-none border-none" />
                                                        ) : (
                                                            <EyeOffIcon className="bg-none border-none" />
                                                        )}
                                                    </div>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="passwordConfirm"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Повторіть пароль"
                                                        type={
                                                            isConfirmPasswordVisible
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        {...field}
                                                    />
                                                    <div
                                                        onClick={() =>
                                                            setIsConfirmPasswordVisible(
                                                                !isConfirmPasswordVisible,
                                                            )
                                                        }
                                                        className="absolute right-2 top-[10px] cursor-pointer"
                                                    >
                                                        {isConfirmPasswordVisible ? (
                                                            <EyeIcon className="bg-none border-none" />
                                                        ) : (
                                                            <EyeOffIcon className="bg-none border-none" />
                                                        )}
                                                    </div>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </form>
                    </Form>
                </div>
                <DialogFooter className="max-w-[420px] w-full mx-auto mt-[20px] pb-[56px]">
                    <div className="flex flex-col items-center w-full">
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                className="w-full"
                                form="registerForm"
                                disabled={!form.formState.isValid}
                            >
                                Зареєструватися
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="mt-[14px] w-full"
                                onClick={handleSecondaryButtonClick}
                            >
                                Я вже зареєстрований
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
