import {UserInterface} from "./user-interface";

export interface AnswersInterface {
  id : number
  question_id : number,
  content : string,
  isAnswer : boolean
  user? : UserInterface;

}
