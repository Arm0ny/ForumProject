import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { SetCsrfInterceptor } from './interceptors/setCsrf.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './components/auth/register/register.component';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptor';
import { HomeComponent } from './components/pages/home/home.component';
import { QuestionComponent } from './components/partials/question/question.component';
import { CategorySelectorComponent } from './components/partials/category-selector/category-selector.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { EditorDetailsComponent } from './components/pages/editor-details/editor-details.component';
import { EditorWriterComponent } from './components/partials/editor-writer/editor-writer.component';
import { MarkdownPipePipe } from './pipes/markdown-pipe.pipe';
import { QuestionDetailsComponent } from './components/pages/question-details/question-details.component';
import { AnswerWriterComponent } from './components/partials/answer-writer/answer-writer.component';
import { AnswerReaderComponent } from './components/partials/answer-reader/answer-reader.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { CreateProfileComponent } from './components/pages/create-profile/create-profile.component';
import { GetSlugPipe } from './pipes/get-slug.pipe';
import { RemoveMarkdownPipe } from './pipes/remove-markdown.pipe';
import { TitlesShortenerPipe } from './pipes/titles-shortener.pipe';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { ErrorMessageComponent } from './components/partials/error-message/error-message.component';
import { UsersRankingComponent } from './components/partials/users-ranking/users-ranking.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SearchbarComponent } from './components/partials/searchbar/searchbar.component';
import { UserDetailsComponent } from './components/pages/user-details/user-details.component';
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuestionComponent,
    CategorySelectorComponent,
    NavbarComponent,
    EditorDetailsComponent,
    EditorWriterComponent,
    MarkdownPipePipe,
    QuestionDetailsComponent,
    AnswerWriterComponent,
    AnswerReaderComponent,
    CreateProfileComponent,
    GetSlugPipe,
    RemoveMarkdownPipe,
    TitlesShortenerPipe,
    SidebarComponent,
    ErrorMessageComponent,
    UsersRankingComponent,
    LogoutComponent,
    SearchbarComponent,
    UserDetailsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetHeadersInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: SetCsrfInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
