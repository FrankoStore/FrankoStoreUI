import { GET_PRODUCTS } from "@/api/queries/getProducts";
import { GET_USER_DATA } from "@/api/queries/getUserData";
import { useQuery } from "@apollo/client";

class UserService {
    getUserData = () => {
        const { loading, error, data } = useQuery(GET_USER_DATA);

        return { data, isLoading: loading, error };
    };
}

export const userService = new UserService();
