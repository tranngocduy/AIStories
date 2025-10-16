export const NUM_COLUMNS = 3;

export const KEYS_STORAGE = {
  DASHBOARD_STORIES: 'DASHBOARD_STORIES'
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
