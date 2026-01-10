import Manager from './manager';

import Loading from './component/Loading';
import SearchStories from './component/SearchStories';

import { ToastInstance, ViewToastInstance } from '@/component/ViewToastInstance';

export const LoadingInstance = Manager(Loading);
export const SearchStoriesInstance = Manager(SearchStories);

export { ToastInstance, ViewToastInstance };
