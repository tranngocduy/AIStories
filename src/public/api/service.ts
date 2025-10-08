import { api } from './api';

export const storiesDashboard = async () => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/stories/dashboard`, method);
  return result;
}
