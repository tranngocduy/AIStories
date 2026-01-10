import Manager from './manager';

import Loading from './component/Loading';
import { SearchStories } from './component/SearchStories';

export const LoadingInstance = Manager(Loading);
export const SearchStoriesInstance = Manager(SearchStories);
