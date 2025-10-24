import Manager from './manager';

import { Loading } from './components/Loading';
import { StoryComment } from './components/StoryComment';
import { SearchStories } from './components/SearchStories';
import { StoryChapters } from './components/StoryChapters';

import { ToastInstance, ViewToastInstance } from '@/components/ViewToastInstance';

export const LoadingInstance = Manager(Loading);
export const StoryCommentInstance = Manager(StoryComment);
export const SearchStoriesInstance = Manager(SearchStories);
export const StoryChaptersInstance = Manager(StoryChapters);

export { ToastInstance, ViewToastInstance };
