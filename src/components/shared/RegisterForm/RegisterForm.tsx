"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface RegisterFormPropsType {
    onSubmit: () => void;
    onClose?: () => void;
    onOpen: () => void;
    onSecondaryButtonClick?: () => void;
    isVisible?: boolean;
}

const formSchema = z.object({
    username: z.string().min(1, { message: "Це поле є обв'язковим" }),
    phoneNumber: z
        .string()
        .regex(/^\+380\d{9}$/, { message: "Некоректний номер" }),
    email: z.string().email({ message: "Некоректна пошта" }),
    password: z
        .string()
        .min(8, { message: "Пароль має містити хоча б 8 символів" }),
});

export const RegisterForm: React.FC<RegisterFormPropsType> = (props) => {
    const { onSubmit, onClose, onOpen, onSecondaryButtonClick, isVisible } =
        props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            phoneNumber: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const handleSecondaryButtonClick = () => {
        onClose?.();
        onSecondaryButtonClick?.();
    };

    const handleClose = () => {
        onClose?.();
    };

    useEffect(() => {
        console.log(form.formState.errors);
    });

    // const handleSubmit = () => {
    //     onSubmit();
    //     handleClose();
    // };

    const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
        values: z.infer<typeof formSchema>,
    ) => {
        console.log(values);
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
                        <form className="flex flex-col gap-[35px]">
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormControl>
                                                <Input
                                                    placeholder="Ім’я та Прізвище"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute top-full" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormControl>
                                                <Input
                                                    placeholder="Телефон"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute top-full" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormControl>
                                                <Input
                                                    placeholder="Електронна пошта"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute top-full" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormControl>
                                                <Input
                                                    placeholder="Придумайте пароль"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute top-full" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </form>
                    </Form>
                </div>
                <DialogFooter className="max-w-[420px] w-full mx-auto mt-[60px] pb-[56px]">
                    <div className="flex flex-col items-center w-full">
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={!form.formState.isValid}
                                onClick={form.handleSubmit(handleSubmit)}
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
