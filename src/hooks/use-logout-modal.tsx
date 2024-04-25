import { create } from "zustand";

interface useLogoutModalInterface {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export const useLogoutModal = create<useLogoutModalInterface>((set) => ({
    open: false,
    setOpen: (value) => set({ open: value }),
}));
