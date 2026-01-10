import { api } from '@/apis/api';

import type { IRequest, IResponse } from '@/models/types';

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
