import {UserInterface} from "./user-interface";

export interface QuestionsInterface {
  id: number;
  title: string;
  content: string;
  points: number;
  category_id: number;
  user? : UserInterface
}
