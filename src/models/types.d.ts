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

export type TOptionFilterState = {
  author: { label: string; value: any } | null;
  sort: { label: string; value: any } | null;
  votes: { label: string; value: any } | null;
  chapters: { label: string; value: any } | null;
  rating: { label: string; value: any } | null;
  status: { label: string; value: any } | null;
  category: { label: string; value: any } | null
};

export interface IResponse {
  StoriesDashboard: {
    hot_stories: TStory[];
    recommended_stories: TStory[];
    newest_stories: TStory[];
  };
}

