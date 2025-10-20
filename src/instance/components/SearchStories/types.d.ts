export type TTypeFilterState = 'author' | '';

export type TOptionFilter = { label: string, value: any };

export type TOptionFilterState = {
  author: TOptionFilter | null,
  sort: TOptionFilter | null,
  votes: TOptionFilter | null,
  chapters: TOptionFilter | null,
  rating: TOptionFilter | null,
  status: TOptionFilter | null,
  category: TOptionFilter | null
};

export type TFilterHeaderRefs = { setTypeFilter: (type: TTypeFilterState) => void };

export type TFilterHeaderProps = { onGenerateQuery: Function, onBack: Function, onClose: Function };

export type TSearchStoriesProps = { resolve?: Function, onHide?: Function };

export type TFilterQueryProps = { onPressFilter: (type: TTypeFilterState) => void };
