import { QuestionsInterface } from './questionsInterface';

export interface ApiResponseInterface {
  data: QuestionsInterface[];
  next_cursor: string;
  prev_page_url: string;
}
