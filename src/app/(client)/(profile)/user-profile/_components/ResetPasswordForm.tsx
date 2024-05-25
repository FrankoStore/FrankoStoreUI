"use client";

import { useLoginUser, useResetPassword } from "@/services/authService";
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

interface ResetPasswordFormPropsType {
    onClose?: () => void;
    onSecondaryButtonClick?: () => void;
    isVisible?: boolean;
}

const formSchema = z
    .object({
        oldPassword: z.string().min(1, { message: "Поле є обов'язковим" }),
        newPassword: z
            .string()
            .min(8, { message: "Пароль має містити хоча б 8 символів" }),
        confirmPassword: z.string().min(8),
    })
    .refine((obj) => obj.newPassword === obj.confirmPassword, {
        message: "Паролі мають співпадати",
    });

export const ResetPasswordForm: React.FC<ResetPasswordFormPropsType> = (
    props,
) => {
    const { onClose, onSecondaryButtonClick, isVisible } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
    });

    const { resetPassword, error, loading } = useResetPassword();

    useEffect(() => {
        if (!form.formState.isValid) {
            const errors = Object.values(form?.formState?.errors)?.map(
                (item) => item.message,
            );
            const firstError = errors[0];
            toast({ title: firstError });
        }
    }, [form.formState.submitCount]);

    const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
        values: z.infer<typeof formSchema>,
    ) => {
        const resetPasswordData = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
        };

        try {
            await resetPassword(resetPasswordData);
            toast({ title: "Пароль успішно змінено" });
            form.reset();
            onClose?.();
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
                onInteractOutside={onClose}
                onEscapeKeyDown={onClose}
            >
                <DialogHeader className="py-[20px] border-b-[1px] border-b-black">
                    <div className="max-w-[420px] w-full mx-auto flex items-center justify-between">
                        <DialogTitle className="text-[28px] text-darkblue">
                            Змінити пароль
                        </DialogTitle>
                        <DialogClose onClick={onClose}>
                            <X size={30} />
                        </DialogClose>
                    </div>
                </DialogHeader>
                <div className="max-w-[420px] w-full mx-auto mt-10">
                    <Form {...form}>
                        <form className="flex flex-col gap-[35px]">
                            <FormField
                                control={form.control}
                                name="oldPassword"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormControl>
                                            <Input
                                                placeholder="Старий пароль"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Новий пароль"
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
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Підтвердити новий пароль"
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
                        </form>
                    </Form>
                </div>
                <DialogFooter className="max-w-[420px] w-full mx-auto mt-[60px] pb-[56px]">
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!form.formState.isValid}
                            onClick={form.handleSubmit(handleSubmit)}
                        >
                            Змінити пароль
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
