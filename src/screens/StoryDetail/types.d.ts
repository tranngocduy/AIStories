import { TStory, TStoryDetail } from '@/models/types';

export type TOverviewProps = { detail?: TStoryDetail };

export type TStoryInfoProps = { story?: TStory, detail?: TStoryDetail };

export type TTabStoryPagesProps = { onChangeTab: (index: number) => void };

export type TTabStoryPagesRef = { onScroll: (tabPageIndex: number) => void };

export type TChaptersProps = { translateVersionId?: number };

export type TChaptersRef = { loadMore: Function };
