import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { HeaderComponent } from './components/shared/header/header.component';
import { SettingsComponent } from './components/shared/header/settings/settings.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authTokenInterceptor } from './auth/auth-token.interceptor';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateCarouselComponent } from './components/dashboard/create-carousel/create-carousel.component';
import { CarouselListComponent } from './components/dashboard/carousel-list/carousel-list.component';

import { CarouselEditComponent } from './components/carousel-edit/carousel-edit.component';
import { CarouselThumbnailsComponent } from './components/carousel-edit/carousel-thumbnails/carousel-thumbnails.component';
import { SlideComponent } from './components/carousel-edit/slide/slide.component';
import { QuillEditorComponent } from './components/carousel-edit/quill-editor/quill-editor.component';

import { EditableComponent } from './components/carousel-edit/quill-editor/editable/editable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SettingsComponent,
    DashboardComponent,
    CreateCarouselComponent,
    CarouselListComponent,
    CarouselEditComponent,
    CarouselThumbnailsComponent,
    SlideComponent,
    QuillEditorComponent,
    EditableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [provideHttpClient(withInterceptors([authTokenInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
