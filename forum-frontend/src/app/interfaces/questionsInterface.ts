export interface QuestionsInterface {
  id: number;
  title: string;
  content: string;
  points: number;
  category_id: number;
  user_id?: number;
  profile_image?: string;
  name?: string;
}
