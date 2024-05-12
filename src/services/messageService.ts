import { SEND_MESSAGE } from "@/api/mutations/sendMessage";
import { useMutation } from "@apollo/client";

export const useSendMessage = () => {
    const [sendMessage, { loading, data, error }] = useMutation(SEND_MESSAGE);

    return { sendMessage, loading, data, error };
};
