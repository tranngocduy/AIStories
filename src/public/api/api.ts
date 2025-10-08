type TResponse = { msgError?: string, data?: any };
type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type THeader = { 'Accept': string, 'Content-Type': string, 'Authorization'?: string };

const _formatErrorData = (error: any): string => {
  const msgError = (error instanceof Error) ? (error.message || error.stack) : (error instanceof String) ? error : String(error);

  if ((typeof (msgError) !== 'string')) return 'An unexpected error occurred. Please try again later.';

  if (!!msgError?.includes?.('TypeError: Network request failed')) return 'Cannot connect to the server. Please try again later.';

  return msgError;
}

const _requestApi = async (url: string, method: TMethod, headers: THeader, clonedBody?: any) => {
  let body = null;

  if ((method !== 'GET') && !!clonedBody) body = JSON.stringify(clonedBody);

  return await fetch(url, { method, headers, body })
    .then(response => response.json())
    .then(response => [null, response])
    .catch(error => [error, null]);
}

const _fetchData = async (url: string, method: TMethod, headers: THeader, data?: any): Promise<TResponse> => {
  const clonedBody = { ...(data || {}) };

  const [error, result] = await _requestApi(url, method, headers, clonedBody);

  try {
    if (!!error) throw Error(error);

    const message = result?.error?.message;

    if (!!message) throw Error(message);

    return result;

  } catch (error) {
    return { msgError: _formatErrorData(error) };
  }
}

export const api = async (url: string, method: TMethod, data?: any): Promise<TResponse> => {
  const headers = <THeader>{};
  headers['Accept'] = 'application/json';
  headers['Content-Type'] = 'application/json';

  return await _fetchData(url, method, headers, data);
}
