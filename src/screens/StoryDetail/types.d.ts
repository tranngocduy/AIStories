import { TStory, TStoryDetail } from '@/models/types';

export type TStoryInfoProps = { story?: TStory, detail?: TStoryDetail };

export type TTabStoryPagesProps = { onChangeTab: (index: number) => void };

export type TTabStoryPagesRef = { onScroll: (tabPageIndex: number) => void };
