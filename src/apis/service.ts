import { api } from './api';

import { API_TStoriesSearch, API_TRatingLike, API_TLogin, API_TRegister, API_TStoryMarked, API_TStoryRating } from '@/models/types';

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

export const likePostRating = async (body: API_TRatingLike) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/rating/like`, method, body);
  return result;
}

export const unLikePostRating = async (body: API_TRatingLike) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/rating/unlike`, method, body);
  return result;
}

export const searchAuthorByName = async (search: string) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/authors?search=${search}`, method);
  return result;
}

export const getAllCategory = async (page?: number, limit?: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/categories/?page=${page}&limit=${limit}`, method);
  return result;
}

export const login = async (body: API_TLogin) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/auth/login/email`, method, body);
  return result;
}

export const register = async (body: API_TRegister) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/auth/register`, method, body);
  return result;
}

export const logout = async () => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/auth/logout`, method);
  return result;
}

export const getUserInfo = async () => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/users/me`, method);
  return result;
}

export const getStoryMarked = async () => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/reading/bookmarks`, method);
  return result;
}

export const updateStoryMarked = async (body: API_TStoryMarked) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/reading/bookmarks`, method, body);
  return result;
}

export const getStoryRateReviews = async (ratingId: number) => {
  const method = 'GET';
  const result = await api(`${process.env.$app.BASE_API}/rating/comment/${ratingId}`, method);
  return result;
}

export const updateStoryRating = async (body: API_TStoryRating) => {
  const method = 'POST';
  const result = await api(`${process.env.$app.BASE_API}/rating`, method, body);
  return result;
}
