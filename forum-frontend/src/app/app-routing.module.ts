import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/core/home/home.component';
import { EditorDetailsComponent } from './components/core/editor-details/editor-details.component';
import { QuestionDetailsComponent } from './components/core/question-details/question-details.component';
import { CreateProfileComponent } from './components/core/create-profile/create-profile.component';
import { AuthGuard } from './guards/auth.guard';
import {LoggedInGuard} from "./guards/logged-in.guard";
import {LogoutComponent} from "./components/auth/logout/logout.component";
import {UserDetailsComponent} from "./components/core/user-details/user-details.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  {path: 'register', component: RegisterComponent,},
  { path: '', component: HomeComponent },
  { path: 'questions/:id', component: QuestionDetailsComponent },
  {path: 'editor', component: EditorDetailsComponent, canActivate: [AuthGuard]},
  { path: 'create-profile', component: CreateProfileComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: UserDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
