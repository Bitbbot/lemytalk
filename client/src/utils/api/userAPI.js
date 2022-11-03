import { $host } from "./index";
import { SERVER_URL } from "../../env";

export const checkUser = async () => {
    const response = await $host.get(`${SERVER_URL}/api/auth/login/success`, {
        cacheControl: false,
        withCredentials: true,
    });
    if (response.status === 200) return true;
};

export const getUser = async () => {
    const response = await $host.get(`${SERVER_URL}/api/user/`, {
        withCredentials: true,
    });
    return response.data;
};

export const getTURN = async () => {
    const response = await $host.get(`${SERVER_URL}/api/user/twillio/`, {
        withCredentials: true,
    });
    return response.data.token.iceServers;
};

export const createUser = async () => {
    const response = await $host.post(`${SERVER_URL}/api/user/`, "", {
        withCredentials: true,
    });
    return response.data;
};
export const updateLanguages = async (
    nativeLanguage,
    studiedLanguage,
    languageLevel,
    isNotifications
) => {
    const response = await $host.put(
        `${SERVER_URL}/api/user/updateLanguages/`,
        {
            nativeLanguage,
            studiedLanguage,
            languageLevel,
            isNotifications,
        },
        {
            withCredentials: true,
        }
    );
    return response.data;
};
