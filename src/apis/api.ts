import { dayjs } from '@/utils/timeTz';

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

const _getRequestToken = () => {
  const headers = <IHeader>{};

  headers['Accept'] = 'application/json';

  headers['Content-Type'] = 'application/json';

  return headers;
}

export const api = async <T>(url: string, method: IMethod, data?: unknown): Promise<IResponse<T>> => {
  const clonedBody = { ...(data || {}) };

  const headers = _getRequestToken();

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