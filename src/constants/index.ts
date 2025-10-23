export const NUM_COLUMNS = 3;

export const KEYS_STORAGE = {
  DASHBOARD_STORIES: 'DASHBOARD_STORIES',
  STORE_CHAPTER_SETTINGS: 'STORE_CHAPTER_SETTINGS'
} as const;

export const STORY_STATUS_VALUE = {
  ONGOING: 'OnGoing',
  COMPLETED: 'Completed',
  HIATUS: 'Hiatus'
} as const;

export const STORY_STATUS_LABEL_MAPPING = {
  [STORY_STATUS_VALUE.ONGOING]: 'Còn tiếp',
  [STORY_STATUS_VALUE.COMPLETED]: 'Hoàn thành',
  [STORY_STATUS_VALUE.HIATUS]: 'Tạm ngưng',
} as const;

export const LABEL_REVIEW = [
  'Như mứt',
  'Hơi chán',
  'Tàm tạm',
  'Khá hay',
  'Tuyệt vời'
] as const;

export const FILTER_OPTION_AUTHOR = [
  { label: 'Tất cả', value: 0 }
] as const;

export const FILTER_OPTION_CATEGORY = [
  { label: 'Tất cả', value: 0 }
] as const;

export const FILTER_OPTION_SORT = [
  { label: 'Mới cập nhật', value: 'Newest' },
  { label: 'Số chương', value: 'Chapters' },
  { label: 'Lượt xem', value: 'Views' },
  { label: 'Lượt đánh giá', value: 'Rating' }
] as const;

export const FILTER_OPTION_VOTES = [
  { label: 'Tất cả', value: 0 },
  { label: 'Hơn 10 lượt', value: 10 },
  { label: 'Hơn 20 lượt', value: 20 },
  { label: 'Hơn 50 lượt', value: 50 },
  { label: 'Hơn 100 lượt', value: 100 }
] as const;

export const FILTER_OPTION_CHAPTERS = [
  { label: 'Tất cả', value: [null, null] },
  { label: '< 300', value: [null, 300] },
  { label: '300 -  1000', value: [300, 1000] },
  { label: '1000 - 2000', value: [1000, 2000] },
  { label: '> 2000', value: [2001, null] }
] as const;

export const FILTER_OPTION_RATING = [
  { label: 'Tất cả', value: 0 },
  { label: 'Hơn 2.0', value: 2 },
  { label: 'Hơn 4.0', value: 4 },
  { label: 'Hơn 6.0', value: 6 },
  { label: 'Hơn 8.0', value: 8 }
] as const;

export const FILTER_OPTION_STATUS = [
  { label: 'Tất cả', value: null },
  { label: 'Còn tiếp', value: STORY_STATUS_VALUE.ONGOING },
  { label: 'Hoàn thành', value: STORY_STATUS_VALUE.COMPLETED },
  { label: 'Tạm Dừng', value: STORY_STATUS_VALUE.HIATUS }
] as const;

export const CHAPTER_FONT_SIZE = [12, 14, 16, 18, 20, 22, 24] as const;

export const CHAPTER_LINE_HEIGHT = [2.0, 2.1, 2.2, 2.3, 2.4, 2.5] as const;

export const CHAPTER_COLORS = [{ text: '#000000', background: '#FFFFFF' }, { text: '#000000', background: '#FAF2DF' }, { text: '#FFFFFF', background: '#17354A' }, { text: '#FFFFFF', background: '#000000' }] as const;
