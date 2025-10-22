import { STORY_STATUS_VALUE } from '@/constants';

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

export type TTagDetail = {
  name?: string;
  slug?: string;
  id?: number;
}

export type TStoryAuthor = {
  name: string;
  slug: string;
  id: number;
}

export type TStoryDetail = {
  title?: string;
  chinese_title?: string;
  description?: string;
  id?: number;
  slug?: string;
  cover_image_url?: string;
  author?: TStoryAuthor;
  status?: typeof STORY_STATUS_VALUE[keyof typeof STORY_STATUS_VALUE];
  categories?: Array<{
    name?: string;
    slug?: string;
    id?: number;
  }>;
  tags?: Array<TTag>;
  total_chapters?: number;
  total_views?: number;
  rating_score?: number;
  rating_count?: number;
  chapter_file_path?: string;
  is_followed?: boolean;
  is_bookmarked?: boolean;
  is_rated?: boolean;
};

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
}

export type TUser = {
  email: string;
  username: string;
  id: number;
  created_at: string;
}

export type TLikeStory = {
  rating_id: number;
  user_id: number;
}

export type TStoryRateVotes = {
  story_id: number;
  score: number;
  content: string;
  id: number;
  user_id: number;
  likes_count: number;
  comments_count: number;
  created_at: string;
  user: TUser;
  likes: TLikeStory[];
  is_liked: boolean;
}

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

export type TUserProfile = {
  access_token?: string,
  refresh_token?: string,
  token_type?: string,

  coin_balance?: number;
  created_at?: string;
  email?: string;
  id?: number?;
  referral_code?: string;
  updated_at?: string;
  username?: string;
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

export type API_TRatingLike = {
  rating_id: number,
  user_id: number
}

export type API_TLogin = {
  email: string,
  password: string
}

export type API_TRegister = {
  email: string,
  username: string,
  password: string
}
