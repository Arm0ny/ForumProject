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
import { HomeComponent } from './components/core/home/home.component';
import { QuestionComponent } from './components/shared/question/question.component';
import { CategorySelectorComponent } from './components/shared/category-selector/category-selector.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EditorDetailsComponent } from './components/core/editor-details/editor-details.component';
import { EditorWriterComponent } from './components/shared/editor-writer/editor-writer.component';
import { MarkdownPipePipe } from './pipes/markdown-pipe.pipe';
import { QuestionDetailsComponent } from './components/core/question-details/question-details.component';
import { AnswerWriterComponent } from './components/core/answer-writer/answer-writer.component';
import { AnswerReaderComponent } from './components/shared/answer-reader/answer-reader.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { CreateProfileComponent } from './components/core/create-profile/create-profile.component';
import { GetSlugPipe } from './pipes/get-slug.pipe';
import { RemoveMarkdownPipe } from './pipes/remove-markdown.pipe';
import { TitlesShortenerPipe } from './pipes/titles-shortener.pipe';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { UsersRankingComponent } from './components/shared/users-ranking/users-ranking.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
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
