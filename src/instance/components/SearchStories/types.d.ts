export type TTypeFilterState = 'author' | '';

export type TTypeFilterRefs = { setTypeFilter: (type: TTypeFilterState) => void };

export type TTypeFilterProps = { onGenerateQuery: Function, onBack: Function, onClose: Function };

export type TSearchStoriesProps = { resolve?: Function, onHide?: Function };

export type TFilterQueryProps = { onPressFilter: (type: string) => void };
