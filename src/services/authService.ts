import { LOGIN } from "@/api/mutations/login";
import { REFRESH } from "@/api/mutations/refresh";
import { REGISTER } from "@/api/mutations/register";
import { useMutation } from "@apollo/client";
import { useLocalStorage } from "usehooks-ts";

interface RegisterUserType {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
}

interface LoginUserType {
    login: string;
    password: string;
}

interface RefreshInput {}

export const useRegisterUser = () => {
    const [, setAccessToken] = useLocalStorage("accessToken", "");
    const [, setRefreshToken] = useLocalStorage("refreshToken", "");
    const [registerUserMutation, { data, loading, error }] =
        useMutation(REGISTER);

    const registerUser = async (userData: RegisterUserType) => {
        const { data } = await registerUserMutation({
            variables: { user: { ...userData, roles: "Customer" } },
        });

        setAccessToken(data.register.accessToken);
        setRefreshToken(data.register.refreshToken);
    };

    return { registerUser };
};

export const useLoginUser = () => {
    const [, setAccessToken] = useLocalStorage("accessToken", "");
    const [, setRefreshToken] = useLocalStorage("refreshToken", "");
    const [loginUserMutation, { data, loading, error }] = useMutation(LOGIN);

    const loginUser = async (userData: LoginUserType) => {
        const { data } = await loginUserMutation({
            variables: { authenticationInput: userData },
        });

        setAccessToken(data.login.accessToken);
        setRefreshToken(data.login.refreshToken);
    };

    return { loginUser };
};

export const useRefreshUser = (userData: RefreshInput) => {
    const [, setAccessToken] = useLocalStorage("accessToken", "");
    const [, setRefreshToken] = useLocalStorage("refreshToken", "");
    const [refreshUserMutation, { data, loading, error }] =
        useMutation(REFRESH);

    const refreshUser = async (userData: LoginUserType) => {
        const { data } = await refreshUserMutation({
            variables: { authenticationInput: userData },
        });

        setAccessToken(data.register.accessToken);
        setRefreshToken(data.register.refreshToken);
    };

    return { refreshUser };
};
