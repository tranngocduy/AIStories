import { TStory } from '@/models/types';

export type TDataState = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] } | null;

export type TGroupProps = { label: string, data: TStory[]  } | nul
