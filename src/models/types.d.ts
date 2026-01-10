export type TUserProfile = {
  access_token: string;
  refresh_token: string;

  coin_balance?: number;
  created_at?: string;
  email?: string;
  id?: number;
  referral_code?: string;
  updated_at?: string;
  username?: string;
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

export type TChapter = {
  id: number;
  chapter_number: number;
  title: string;
  content: string;
  views: number;
  is_paid: number;
  price: number | null;
  slug: string;
  audio_url: string | null;
  audio_duration: number | null;
  chapter_index: number;
}

export type TCategory = {
  name?: string;
  description?: string | null;
  id?: number;
  slug?: string;
}

export type TAuthor = {
  name: string;
  slug: string;
  id: number;
}

export type TStoryDetail = {
  title: string;
  chinese_title: string;
  description: string;
  id: number;
  slug: string;
  cover_image_url?: string;
  author: TAuthor;
  status: string;
  categories: string[];
  tags: string[];
  total_chapters: number;
  total_views: number;
  rating_score: number;
  rating_count: number;
  chapter_file_path: string;
  total_follows: number;
}

export type TOptionFilter = { label: string; value: any };

export type TOptionFilterState = {
  author: TOptionFilter | null;
  sort: TOptionFilter | null;
  votes: TOptionFilter | null;
  chapters: TOptionFilter | null;
  rating: TOptionFilter | null;
  status: TOptionFilter | null;
  category: TOptionFilter | null;
};

export type TMetadata = {
  total_items: number;
  current_page: number;
  total_pages: number;
  limit: number;
};

export interface IResponse {
  StoriesDashboard: {
    hot_stories: TStory[];
    recommended_stories: TStory[];
    newest_stories: TStory[];
  };
  StoriesSearchQuery: {
    items: TStoryDetail[];
    metadata: TMetadata;
  },
  SearchAuthorByName: {
    items: TAuthor[];
    metadata: TMetadata;
  },
  GetAllCategory: {
    items: TCategory[];
    metadata: TMetadata;
  }
}

export interface IRequest {
  StoriesSearchQuery: {
    keyword?: string;
    author_id?: number;
    sort_by?: string;
    min_votes?: number;
    min_chapters?: number;
    max_chapters?: number;
    rank_by?: string;
    time_range?: string;
    min_rating?: number;
    status?: string;
    category_ids?: number[];
    tag_ids?: number[]
  }
}