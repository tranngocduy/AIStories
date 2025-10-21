export const getDataMessageInValid = (msgError: Record<string, any>) => !!Object.keys(msgError).filter(el => !!msgError?.[el])?.[0];
