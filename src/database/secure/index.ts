import * as KeyChain from 'react-native-keychain';

import { formatJWT } from '@/utils/jwt';

import type { TUserProfile } from '@/models/types';

const keyChainServer = '@AIStories_5afdaca7_5d7c_4ec6_ad00_fefb22f2265e_server';
const keyChainService = '@AIStories_c33630c6_d6d2_4c51_a5f1_4113318f4b11_service';

export const setSecureInfo = async (userInfo: TUserProfile) => {
  const userJWT = await formatJWT(userInfo);

  if (!!userJWT?.id && !!userJWT?.exp && !!userJWT?.access_token && !!userJWT?.refresh_token) {
    const payload = JSON.stringify(userJWT);
    await KeyChain.setInternetCredentials(keyChainServer, keyChainService, payload);
  }
}

export const getSecureInfo = async () => {
  const result = await KeyChain.getInternetCredentials(keyChainServer);

  if (!result) return null;

  if (!result.password) return null;

  const userJWT = JSON.parse(result.password);

  return userJWT;
}

export const removeSecureInfo = async () => {
  await KeyChain.resetInternetCredentials({ server: keyChainServer, service: keyChainService });
}
