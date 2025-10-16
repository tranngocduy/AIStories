import { api } from './api';

import { API_TStoriesSearch } from '@/models/types';

export const storiesDashboard = async () => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/stories/dashboard`, method);
  return result;
}

export const searchStoriesByQueryString = async (page?: number, body?: API_TStoriesSearch) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/stories/search?page=${page}&limit=9`, method, body);
  return result;
}

export const getStoryDetail = async (storyId?: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/stories/${storyId}`, method);
  return result;
}

export const getTranslateVersions = async (storyId?: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/stories/${storyId}/translate-versions`, method);
  return result;
}

export const getStoryChapters = async (translateVersionId?: number, page?: number, limit?: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/chapters/${translateVersionId}?page=${page}&limit=${limit}`, method);
  return result;
}

export const getStoryRateVotes = async (storyId?: number, page?: number, limit?: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/rating/get-all-ratings/${storyId}?page=${page}&limit=${limit}`, method);
  return result;
}
