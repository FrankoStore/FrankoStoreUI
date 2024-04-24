import { IUserDataType } from "@/types/User.types";
import { create } from "zustand";

interface useActiveUserStore {
    user: IUserDataType | null;
    isLoading: boolean;
    setUser: (user: IUserDataType | null) => void;
}

export const useActiveUser = create<useActiveUserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user, isLoading: false }),
    isLoading: true,
}));
