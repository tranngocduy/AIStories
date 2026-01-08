import { decodeBase64 } from '@/utils/base64';

import type { TUserProfile } from '@/models/types';

export const parseJwt = (token: string) => {
  const parts = token?.split?.('.');
  if (parts?.length < 2) return null;

  const base64Url = parts?.[1];
  const base64 = base64Url?.replace?.('-', '+')?.replace?.('_', '/');
  return !!(base64) ? JSON.parse(decodeBase64(base64)) : null;
}

export const formatJWT = (user: TUserProfile) => {
  const access_token = user.access_token;
  const refresh_token = user.refresh_token;

  const jwt_decoded = parseJwt(access_token);

  if (!!jwt_decoded?.sub && !!jwt_decoded?.exp) {
    const { sub, exp } = jwt_decoded;
    return { id: sub, exp, access_token, refresh_token };
  }
}
