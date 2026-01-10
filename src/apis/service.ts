import { api } from '@/apis/api';

import type { IRequest, IResponse } from '@/models/types';

export const login = async (body: IRequest['Login']) => {
  const method = 'POST';
  const result = await api<IResponse['GetUserInfo']>(`${process.env.$app.BASE_API}/auth/login/email`, method, body);
  return result;
}

export const register = async (body: IRequest['Register']) => {
  const method = 'POST';
  const result = await api<IResponse['GetUserInfo']>(`${process.env.$app.BASE_API}/auth/register`, method, body);
  return result;
}

export const getUserInfo = async () => {
  const method = 'GET';
  const result = await api<IResponse['GetUserInfo']>(`${process.env.$app.BASE_API}/users/me`, method);
  return result;
}

export const storiesDashboard = async () => {
  const method = 'GET';
  const result = await api<IResponse['StoriesDashboard']>(`${process.env.$app.BASE_API}/stories/dashboard`, method);
  return result;
}

export const searchStoriesByQueryString = async (page?: number, body?: IRequest['StoriesSearchQuery']) => {
  const method = 'POST';
  const result = await api<IResponse['StoriesSearchQuery']>(`${process.env.$app.BASE_API}/stories/search?page=${page}&limit=9`, method, body);
  return result;
}

export const searchAuthorByName = async (search: string) => {
  const method = 'GET';
  const result = await api<IResponse['SearchAuthorByName']>(`${process.env.$app.BASE_API}/authors?search=${search}`, method);
  return result;
}

export const getAllCategory = async (page?: number, limit?: number) => {
  const method = 'GET';
  const result = await api<IResponse['GetAllCategory']>(`${process.env.$app.BASE_API}/categories/?page=${page}&limit=${limit}`, method);
  return result;
}
