import { TStory } from '@/models/types';

export type TGroupProps = { label: string, data: TStory[]  } | nul

export type TDataStories = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] } | null;
