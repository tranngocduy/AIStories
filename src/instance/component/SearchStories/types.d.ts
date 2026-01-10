import { TOptionFilter, TOptionFilterState } from '@/models/types';

export type TypeFilterState = 'author' | 'sort' | 'votes' | 'chapters' | 'rating' | 'status' | 'category' | '';

export type OptionQuery = { type: string, label: string, value: any };

export type FilterHeaderRefs = { setTypeFilter: (type: TypeFilterState) => void };

export type FilterHeaderProps = { onGenerateQuery: Function, onBack: Function, onClose: Function };

export type SearchStoriesProps = { query: TOptionFilterState, resolve: Function, onHide?: () => void };

export type PageFilterProps = { query: TOptionFilter | null, onChangeFilter: (option: OptionQuery) => void };

export type FilterQueryProps = { query: TOptionFilterState, onPressFilter: (type: TypeFilterState) => void, onPressRest: () => void };
