import { LOGIN } from "@/api/mutations/login";
import { REGISTER } from "@/api/mutations/register";
import { useMutation } from "@apollo/client";

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
    const [registerUserMutation, { data, loading, error }] =
        useMutation(REGISTER);

    const registerUser = async (userData: RegisterUserType) => {
        const { data } = await registerUserMutation({
            variables: { user: { ...userData, roles: "Customer" } },
        });

        localStorage.setItem("accessToken", data.register.accessToken);
        localStorage.setItem("refreshToken", data.register.refreshToken);
    };

    return { registerUser };
};

export const useLoginUser = () => {
    const [loginUserMutation, { data, loading, error }] = useMutation(LOGIN);

    const loginUser = async (userData: LoginUserType) => {
        const { data } = await loginUserMutation({
            variables: { authenticationInput: userData },
        });

        localStorage.setItem("accessToken", data.login.accessToken);
        localStorage.setItem("refreshToken", data.login.refreshToken);
    };

    return { loginUser };
};

export const useRefreshUser = (userData: RefreshInput) => {};
