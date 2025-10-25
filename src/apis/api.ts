import { dayjs } from '@/utils/timeTz';
import { Authorization } from '@/utils/app';
import { setSecureInfo } from '@/database/secure';

type IResponse = { msgError?: string, data?: any };

type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type IHeader = { 'Accept': string, 'Content-Type': string, 'Authorization': string };

let refreshTokenRequest: any = null;

const _checkExpiredToken = (exp: number) => ((exp > 0) && (exp < (dayjs().valueOf() / 1000)));

const _formatErrorData = (error: any) => {
  const msgError = (error instanceof Error) ? (error.message || error.stack) : error;

  if (!msgError || (typeof (msgError) !== 'string')) return 'Xảy ra lỗi, vui lòng thử lại sau.';

  if (!!msgError?.includes?.('TypeError: Network request failed')) return 'Không thể kết nối đến máy chủ';

  return msgError;
}

const _requestApi = async (url: string, method: IMethod, headers: IHeader, clonedBody?: any): Promise<any> => {
  let body = null;

  if ((method !== 'GET') && !!clonedBody) body = JSON.stringify(clonedBody);

  const result = await fetch(url, { method, headers, body }).then(response => [null, response]).catch(error => [error, null]);

  try {
    const [error, response] = result;

    if (!!error) return [error, null];

    const responseJSON = await response.json();

    return [null, responseJSON];

  } catch (error) {

    return [error, null];

  }
};

const _refreshToken = async (headers: IHeader, refresh_token: string) => {
  const method = 'POST';
  const url = `${process.env.$app.BASE_API}/auth/refresh-token`;

  const [_, result] = await _requestApi(url, method, headers, { refresh_token });
  if (!!result?.access_token && !!result?.refresh_token) return result;

  return null;
};

const _getRequestToken = async (headers: IHeader) => {
  const userJWT = Authorization?.current;

  const access_token = userJWT?.access_token;

  const refresh_token = userJWT?.refresh_token;

  if (!access_token || !refresh_token) return null;

  const isExpiredToken = _checkExpiredToken(userJWT?.exp);

  if (!!isExpiredToken) refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : _refreshToken(headers, refresh_token);

  const userInfo = await refreshTokenRequest;

  if (!!userInfo) await setSecureInfo(userInfo);

  refreshTokenRequest = null;

  return `Bearer ${Authorization?.current?.access_token}`;
}

const _fetchData = async (url: string, method: IMethod, headers: IHeader, data?: any): Promise<IResponse> => {
  const clonedBody = { ...(data || {}) };

  const [error, result] = await _requestApi(url, method, headers, clonedBody);
  debugger
  try {
    if (!!error) throw Error(error);

    if (!!result?.detail?.message) throw Error(result?.detail?.message);

    if (!!result?.status && ![200, 201].includes(result?.status)) throw Error(result?.message);

    return result;

  } catch (e) {
    return { msgError: _formatErrorData(e) };
  }
}

export const api = async (url: string, method: IMethod, data?: any): Promise<IResponse> => {
  const headers = <IHeader>{};

  headers['Accept'] = 'application/json';

  headers['Content-Type'] = 'application/json';

  const token = await _getRequestToken(headers);

  if (!!token) headers['Authorization'] = token;

  return await _fetchData(url, method, headers, data);
}
