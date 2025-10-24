import { TStory } from '@/models/types';

export type TGroupProps = { label: string, data?: TStory[], sort?: { label: string, value: string } };

export type TDataStories = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] };
