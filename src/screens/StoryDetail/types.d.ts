import { TStory, TStoryDetail } from '@/models/types';

export type TOverviewProps = { detail?: TStoryDetail };

export type TStoryInfoProps = { story?: TStory, detail?: TStoryDetail };

export type TTabStoryProps = { onChangeTab: (index: number) => void };

export type TTabStoryRef = { onScroll: (tabPageIndex: number) => void };

export type TChaptersProps = { translateVersionId?: number };

export type TChaptersRef = { loadMore: Function };
