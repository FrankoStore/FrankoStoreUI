"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { useActiveUser } from "@/hooks/use-active-user";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ContactsFormPropsType {
    overrideContainerStyles?: string;
}

const formSchema = z.object({
    email: z.string().email().min(1, "Пошта є обов'язковим полем"),
    phone: z.string().regex(/^\+380\d{9}$/, { message: "Некоректний номер" }),
    message: z.string().min(5, "Повідомлення має містити мінімум 5 символів"),
});

export const ContactsForm: React.FC<ContactsFormPropsType> = ({
    overrideContainerStyles,
}) => {
    const { toast } = useToast();
    const { user } = useActiveUser();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: user?.email ?? "",
            message: "",
            phone: user?.phone ?? "",
        },
        mode: "onSubmit",
    });

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
        try {
            toast({
                title: "Дякуємо, що звернулися до нас. Ми розглянемо ваше повідомлення і зв'яжемося з вами якнайшвидше.",
            });
            form.reset();
        } catch (e) {
            toast({
                title: "Неправильні дані",
            });
        }
    };

    return (
        <div
            className={cn(
                "grid w-full max-w-lg  gap-4 border bg-background shadow-lg sm:rounded-lg sm:max-w-[580px] rounded-sm p-4",
                overrideContainerStyles,
            )}
        >
            <p className="text-[35px]">Написати нам</p>
            <Form {...form}>
                <form className="flex flex-col gap-[35px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="example@gmail.com"
                                        className="placeholder:opacity-70 w-1/2"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="+380671234567"
                                        className="placeholder:opacity-70 w-1/2"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Ваше повідомлення"
                                        className="placeholder:opacity-70 min-h-[200px] resize-none"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="w-1/2" type="submit">
                        Надіслати
                    </Button>
                </form>
            </Form>
        </div>
    );
};
