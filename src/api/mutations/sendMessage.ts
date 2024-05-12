import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
    mutation SentMessage($message: CreateMessageInput!) {
        sentMessage(message: $message) {
            messageStatus
        }
    }
`;
