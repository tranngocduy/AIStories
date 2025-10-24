import Manager from './manager';

import { SearchStories } from './components/SearchStories';
import { StoryChapters } from './components/StoryChapters';

import { ToastInstance, ViewToastInstance } from '@/components/ViewToastInstance';

export const SearchStoriesInstance = Manager(SearchStories);
export const StoryChaptersInstance = Manager(StoryChapters);

export { ToastInstance, ViewToastInstance };
