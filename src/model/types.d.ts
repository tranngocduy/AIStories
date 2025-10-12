export type TCategory = {
  name: string;
  description: string | null;
  id: number;
  slug: string;
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
