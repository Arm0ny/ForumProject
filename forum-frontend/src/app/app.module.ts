import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule, HttpXsrfTokenExtractor} from '@angular/common/http';
import { SetCsrfInterceptor } from './interceptors/setCsrf.interceptor';
import { CookieService } from "ngx-cookie-service";
import { RegisterComponent } from './components/auth/register/register.component';import {SetHeadersInterceptor} from "./interceptors/set-headers.interceptor";
import { HomeComponent } from './components/core/home/home.component';
import { QuestionComponent } from './components/shares/question/question.component';
import { CategorySelectorComponent } from './components/shares/category-selector/category-selector.component';
import { NavbarComponent } from './components/shares/navbar/navbar.component';
import { EditorDetailsComponent } from './components/core/editor-details/editor-details.component';
import {EditorWriterComponent} from "./components/shares/editor-writer/editor-writer.component";
import { EditorReaderComponent } from './components/shares/editor-reader/editor-reader.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, QuestionComponent, CategorySelectorComponent, NavbarComponent, EditorDetailsComponent, EditorWriterComponent, EditorReaderComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SetCsrfInterceptor, multi: true },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
