import { $host } from './index';

// eslint-disable-next-line consistent-return
export const checkUser = async () => {
  const response = await $host.get('auth/login/success', {
    cacheControl: false,
    withCredentials: true,
  });
  if (response.status === 200) return true;
};

export const getUser = async () => {
  const response = await $host.get('user/', {
    withCredentials: true,
  });
  return response.data;
};

export const getTURN = async () => {
  const response = await $host.get('user/twillio/', {
    withCredentials: true,
  });
  return response.data.token.iceServers;
};

export const createUser = async () => {
  const response = await $host.post('user/', '', {
    withCredentials: true,
  });
  return response.data;
};
export const updateLanguages = async (
  nativeLanguage,
  studiedLanguage,
  languageLevel,
  isNotifications,
) => {
  const response = await $host.put(
    'user/updateLanguages/',
    {
      nativeLanguage,
      studiedLanguage,
      languageLevel,
      isNotifications,
    },
    {
      withCredentials: true,
    },
  );
  return response.data;
};
