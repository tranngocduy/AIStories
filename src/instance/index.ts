import Manager from './manager';

import { SearchStories } from './components/SearchStories';

import { ToastInstance, ViewToastInstance } from '@/components/ViewToastInstance';

export const SearchStoriesInstance = Manager(SearchStories);

export { ToastInstance, ViewToastInstance };
