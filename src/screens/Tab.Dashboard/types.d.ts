import { TStory } from '@/models/types';

export type TStateData = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] } | null;
