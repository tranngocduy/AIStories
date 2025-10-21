import { TOptionFilter, TOptionFilterState } from '@/models/types';

export type TTypeFilterState = 'author' | 'sort' | 'votes' | 'chapters' | 'rating' | 'status' | 'category' | '';

export type TOptionQuery = { type: string, label: string, value: any };

export type TFilterHeaderRefs = { setTypeFilter: (type: TTypeFilterState) => void };

export type TFilterHeaderProps = { onGenerateQuery: Function, onBack: Function, onClose: Function };

export type TSearchStoriesProps = { query: TOptionFilterState, resolve: Function, onHide?: Function };

export type TPageFilterProps = { query: TOptionFilter | null, onChangeFilter: (option: TOptionQuery) => void };

export type TFilterQueryProps = { query: TOptionFilterState, onPressFilter: (type: TTypeFilterState) => void, onPressRest: () => void };
