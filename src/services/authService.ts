import { LOGIN } from "@/api/mutations/login";
import { REFRESH } from "@/api/mutations/refresh";
import { REGISTER } from "@/api/mutations/register";
import { ILoginUserType, IRegisterUserType } from "@/types/User.types";
import { useMutation } from "@apollo/client";

import { useAuthContext } from "@/components/providers/AuthProvider";

export const useRegisterUser = () => {
    const { setToken } = useAuthContext();
    const [registerUserMutation] = useMutation(REGISTER);

    const registerUser = async (userData: IRegisterUserType) => {
        const { data } = await registerUserMutation({
            variables: { user: { ...userData, roles: "Customer" } },
        });

        setToken("accessToken", data.register.accessToken);
        setToken("refreshToken", data.register.refreshToken);
    };

    return { registerUser };
};

export const useLoginUser = () => {
    const { setToken } = useAuthContext();
    const [loginUserMutation, { data, loading, error }] = useMutation(LOGIN);

    const loginUser = async (userData: ILoginUserType) => {
        const { data } = await loginUserMutation({
            variables: { authenticationInput: userData },
        });

        setToken("accessToken", data.login.accessToken);
        setToken("refreshToken", data.login.refreshToken);
    };

    return { loginUser };
};

export const useRefreshUser = () => {
    const { setToken } = useAuthContext();
    const [refreshUserMutation] = useMutation(REFRESH);

    const refreshUser = async (userData: ILoginUserType) => {
        const { data } = await refreshUserMutation({
            variables: { authenticationInput: userData },
        });

        setToken("accessToken", data.register.accessToken);
        setToken("refreshToken", data.register.refreshToken);
    };

    return { refreshUser };
};
