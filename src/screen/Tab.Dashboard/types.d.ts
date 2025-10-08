import { TStory } from '@app-model';

export type TDataStories = { hotStories?: TStory[], newestStories?: TStory[], recommendedStories?: TStory[] } | null;

export type TGroupProps = { data?: TStory[]; label: string; }
