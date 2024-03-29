"use client";

import { useLoginUser } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, X } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";

interface LoginFormPropsType {
    onClose?: () => void;
    onSecondaryButtonClick?: () => void;
    isVisible?: boolean;
}

const formSchema = z.object({
    username: z.string().min(1, { message: "Поле є обов'язковим" }),
    password: z
        .string()
        .min(8, { message: "Пароль має містити хоча б 8 символів" }),
});

export const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    const { onClose, onSecondaryButtonClick, isVisible } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onSubmit",
    });

    const { loginUser } = useLoginUser();

    const handleSecondaryClick = () => {
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

    const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
        values: z.infer<typeof formSchema>,
    ) => {
        const loginData = {
            login: values.username,
            password: values.password,
        };

        try {
            await loginUser(loginData);
            toast({ title: "Користувач авторизований" });
            handleClose();
            form.reset();
        } catch (e) {
            toast({
                title: "Неправильні дані",
            });
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
                            Вхід
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
                                                    placeholder="Ім'я користувача"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="relative">
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
                                Увійти
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="mt-[14px] w-full"
                                onClick={handleSecondaryClick}
                            >
                                Зареєструватися
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
