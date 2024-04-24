import { GET_USER_DATA } from "@/api/queries/getUserData";
import { IUserDataType } from "@/types/User.types";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useGetUserData = () => {
    const [accessToken] = useLocalStorage("accessToken", "");
    const [getUserData, { loading, error, data, called }] =
        useLazyQuery(GET_USER_DATA);

    useEffect(() => {
        if (!loading) getUserData();
    }, [accessToken]);

    const userData = data?.getMysUser as IUserDataType;

    return { userData, loading, error, called };
};
