import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

export const getChatList = (offset: number = 0, limit: number = 20) => {
    return wrapper("get", URLS.LINK + URLS.LIST, undefined, {
        params: {offset, limit},
        headers: {
            'accept': 'application/json',
            'version': '0.0'
        }
    })
}

export const getMessages = (chatId: string) => {
    const url = `${URLS.LINK + URLS.MESSAGES}?chat_id=${chatId}`;
    return wrapper("get", url, undefined, {
        headers: {
            'accept': 'application/json',
            'version': '0.0'
        }
    });
};
