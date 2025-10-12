import { TStory } from '@/model/types';

export type TStateData = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] } | null;
