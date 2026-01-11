import Manager from './manager';

import Loading from './component/Loading';
import ToastConfirm from './component/ToastConfirm';
import StoryComment from './component/StoryComment';
import SearchStories from './component/SearchStories';
import StoryChapters from './component/StoryChapters';

import { ToastInstance, ViewToastInstance } from '@/component/ViewToastInstance';

export const LoadingInstance = Manager(Loading);
export const ToastConfirmInstance = Manager(ToastConfirm);
export const StoryCommentInstance = Manager(StoryComment);
export const SearchStoriesInstance = Manager(SearchStories);
export const StoryChaptersInstance = Manager(StoryChapters);

export { ToastInstance, ViewToastInstance };
