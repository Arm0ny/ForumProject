import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import {RegisterComponent} from "./components/auth/register/register.component";
import {HomeComponent} from "./components/core/home/home.component";
import {QuestionComponent} from "./components/shares/question/question.component";
import {EditorDetailsComponent} from "./components/core/editor-details/editor-details.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'questions', component: QuestionComponent},
  {path: 'editor', component: EditorDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
