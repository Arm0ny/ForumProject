import {UserInterface} from "./user-interface";
import {CategoriesInterface} from "./categories-interface";

export interface QuestionsInterface {
  id: number;
  title: string;
  content: string;
  points: number;
  user? : UserInterface;
  category? : CategoriesInterface
}
