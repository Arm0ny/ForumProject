import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import {RegisterComponent} from "./components/auth/register/register.component";
import {HomeComponent} from "./components/core/home/home.component";
import {QuestionComponent} from "./components/shares/question/question.component";
import {EditorDetailsComponent} from "./components/core/editor-details/editor-details.component";
import {QuestionDetailsComponent} from "./components/core/question-details/question-details.component";
import {CreateProfileComponent} from "./components/core/create-profile/create-profile.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'questions', component: HomeComponent},
  {path: 'questions/:id', component: QuestionDetailsComponent},
  {path: 'editor', component: EditorDetailsComponent},
  {path: 'create-profile', component: CreateProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
