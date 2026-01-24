import { dayjs } from '@/utils/timeTz';

import { setSecureInfo } from '@/database/secure';

import { Authorization, userLogout } from '@/utils/app';

type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type IResponse<T> = { data?: T, errorMessage?: string };

type IHeader = { 'Accept': string, 'Content-Type': string, 'Authorization': string };

let refreshTokenRequest: any = null;

const _checkExpiredToken = (exp: number) => ((exp > 0) && (exp < (dayjs().valueOf() / 1000)));

const _formatErrorData = (error: any): string => {
  const msgError = (error instanceof Error) ? (error.message || error.stack) : error;

  if (!msgError || (typeof (msgError) !== 'string')) return 'Xảy ra lỗi, vui lòng thử lại sau.';

  if (!!msgError?.includes?.('TypeError: Network request failed')) return 'Không thể kết nối đến máy chủ.';

  return msgError;
}

const _fetchData = async (url: string, method: IMethod, headers: IHeader, clonedBody?: unknown): Promise<any> => {
  let body = null;

  if ((method !== 'GET') && !!clonedBody) body = JSON.stringify(clonedBody);

  const result = await fetch(url, { method, headers, body }).then(response => [null, response]).catch(error => [error, null]);

  try {
    const [error, response] = result;

    if (!!error) return [error, null];

    const responseJSON = await response.json();

    return [null, responseJSON];

  } catch (error) {
    return [_formatErrorData(error), null];
  }
}

const _refreshToken = async (headers: IHeader, refresh_token: string) => {
  const method = 'POST';
  const url = `${process.env.$app.BASE_API}/auth/refresh-token`;

  const [_, result] = await _fetchData(url, method, headers, { refresh_token });
  if (!!result?.data?.access_token && !!result?.data?.refresh_token) return result?.data;

  await userLogout();
};

const _getRequestToken = async () => {
  const headers = <IHeader>{};

  headers['Accept'] = 'application/json';

  headers['Content-Type'] = 'application/json';

  const userJWT = Authorization?.current;

  const access_token = userJWT?.access_token;

  const refresh_token = userJWT?.refresh_token;

  if (!access_token || !refresh_token) return headers;

  const isExpiredToken = _checkExpiredToken(userJWT?.exp);

  if (!!isExpiredToken) refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : _refreshToken(headers, refresh_token);

  const userInfo = await refreshTokenRequest;

  if (!!userInfo) await setSecureInfo(userInfo);

  refreshTokenRequest = null;

  headers['Authorization'] = `Bearer ${Authorization?.current?.access_token}`;

  return headers;
}

export const api = async <T>(url: string, method: IMethod, data?: unknown): Promise<IResponse<T>> => {
  const clonedBody = { ...(data || {}) };

  const headers = await _getRequestToken();

  const [error, result] = await _fetchData(url, method, headers, clonedBody);

  try {
    if (!!error) throw Error(_formatErrorData(error));

    if (!!result?.detail?.message) throw Error(result?.detail?.message);

    if (!!result?.status && ![200, 201].includes(result?.status)) throw Error(result?.message);

    return result;

  } catch (e) {
    return { errorMessage: _formatErrorData(e) };
  }
}