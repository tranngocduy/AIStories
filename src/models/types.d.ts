export type TCategory = {
  name?: string;
  description?: string | null;
  id?: number;
  slug?: string;
}

export type TStory = {
  id?: number;
  categories?: Category[];
  cover_image_url?: string;
  rating_score?: number;
  rating_count?: number;
  title?: string;
  total_chapters?: number;
  total_views?: number;
}

export type API_TStoriesSearch = {
  keyword?: string,
  author_id?: number,
  sort_by?: string,
  min_votes?: number,
  min_chapters?: number,
  max_chapters?: number,
  rank_by?: string,
  time_range?: string,
  min_rating?: number,
  status?: string,
  category_ids?: number[],
  tag_ids?: number[]
}
