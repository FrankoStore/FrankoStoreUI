"use client";

import { useGetUserData } from "@/services/userService";
import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
} from "react";
import { useLocalStorage } from "usehooks-ts";

import { useActiveUser } from "@/hooks/use-active-user";

interface IAuthContext {
    accessToken: string;
    refreshToken: string;
    setToken: (key: "accessToken" | "refreshToken", value: string) => void;
}

const initialContextValue = {
    accessToken: "",
    refreshToken: "",
    setToken: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContextValue);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
    const { userData, loading, error, called } = useGetUserData();
    const { setUser } = useActiveUser();

    const setToken = useCallback(
        (key: "accessToken" | "refreshToken", value: string) => {
            switch (key) {
                case "accessToken":
                    setAccessToken(value);
                    return;
                case "refreshToken":
                    setRefreshToken(value);
                    return;

                default:
                    return;
            }
        },
        [setAccessToken, setRefreshToken],
    );

    useEffect(() => {
        if (!loading && !error && called) {
            setUser(userData);
        }
        if (error) {
            setUser(null);
        }
    }, [accessToken, loading]);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                setToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
