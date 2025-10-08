export type TCategory = {
  id: number;
  name: string;
  description: string | null;
}

export type TStory = {
  id: number;
  categories: Category[];
  cover_image_url: string;
  rating_score: number;
  rating_count: number;
  title: string;
  total_chapters: number;
  total_views: number;
}
