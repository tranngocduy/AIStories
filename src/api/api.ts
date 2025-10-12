type IResponse = { msgError?: string, data?: any };

type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type IHeader = { 'Accept': string, 'Content-Type': string, 'Authorization': string };

const _formatErrorData = (error: any) => {
  const msgError = (error instanceof Error) ? (error.message || error.stack) : error;

  if (!msgError || (typeof (msgError) !== 'string')) return 'Xảy ra lỗi vui lòng thử lại sau.';

  if (!!msgError?.includes?.('TypeError: Network request failed')) return 'Không thể kết nối đến máy chủ';

  return msgError;
}

const _requestApi = async (url: string, method: IMethod, headers: IHeader, clonedBody?: any): Promise<any> => {
  let body = null;

  if ((method !== 'GET') && !!clonedBody) body = JSON.stringify(clonedBody);

  return await fetch(url, { method, headers, body })
    .then(response => response.json())
    .then(response => [null, response])
    .catch(error => [error, null]);
};

const _fetchData = async (url: string, method: IMethod, headers: IHeader, data?: any): Promise<IResponse> => {
  const clonedBody = { ...(data || {}) };

  const [error, result] = await _requestApi(url, method, headers, clonedBody);

  try {
    if (!!error) throw Error(error);

    const message = result?.error?.message;

    if (!!message) throw Error(message);

    return result;

  } catch (e) {
    return { msgError: _formatErrorData(e) };
  }
}

export const api = async (url: string, method: IMethod, data?: any): Promise<IResponse> => {
  const headers = <IHeader>{};

  headers['Accept'] = 'application/json';

  headers['Content-Type'] = 'application/json';

  return await _fetchData(url, method, headers, data);
}
