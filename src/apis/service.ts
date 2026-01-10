import { api } from './api';

import type { IResponse } from '@/models/types';

export const storiesDashboard = async () => {
  const method = 'GET';
  const result = await api<IResponse['StoriesDashboard']>(`${process.env.$app.BASE_API}/stories/dashboard`, method);
  return result;
}
