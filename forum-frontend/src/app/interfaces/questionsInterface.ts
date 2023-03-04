export interface QuestionsInterface {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  points: number;
  category_id: number;
  user_id: number;
  profile_image: string;
  name: string;
}
