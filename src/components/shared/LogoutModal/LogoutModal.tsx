"use client";

import { X } from "lucide-react";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

import { useActiveUser } from "@/hooks/use-active-user";
import { useLogoutModal } from "@/hooks/use-logout-modal";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

export const LogoutModal = () => {
    const { open, setOpen } = useLogoutModal();
    const [, setAccessToken] = useLocalStorage("accessToken", "");
    const [, setRefreshToken] = useLocalStorage("refreshToken", "");
    const { setUser } = useActiveUser();
    const { toast } = useToast();

    const confirm = () => {
        setAccessToken("");
        setRefreshToken("");
        toast({ description: "Успішний вихід з облікового запису" });
        setUser(null);
        setOpen(false);
    };
    return (
        <Dialog open={open}>
            <DialogContent
                className="sm:max-w-[580px] rounded-none p-0"
                onInteractOutside={() => setOpen(false)}
                onEscapeKeyDown={() => setOpen(false)}
            >
                <DialogHeader className="py-[20px] border-b-[1px] border-b-black">
                    <div className="max-w-[420px] w-full mx-auto flex items-center justify-between">
                        <DialogTitle className="text-[28px] text-darkblue">
                            Підтвердити вихід з облікового запису
                        </DialogTitle>
                        <DialogClose onClick={() => setOpen(false)}>
                            <X size={30} />
                        </DialogClose>
                    </div>
                </DialogHeader>
                <DialogFooter className="max-w-[420px] w-full mx-auto mt-[60px] pb-[56px]">
                    <div className="flex flex-col items-center w-full">
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                className="w-full"
                                onClick={confirm}
                            >
                                Вийти
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="mt-[14px] w-full"
                                onClick={() => setOpen(false)}
                            >
                                Скасувати
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
