import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { CarouselListComponent } from './dashboard/carousel-list/carousel-list.component';
import { CarouselEditComponent } from './carousel-edit/carousel-edit.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideComponent } from './carousel-edit/slide/slide.component';
import { CarouselDetailComponent } from './carousel-edit/carousel-detail/carousel-detail.component';
import { CarouselThumbnailsComponent } from './carousel-edit/carousel-thumbnails/carousel-thumbnails.component';
import { TemplateComponent } from './carousel-edit/slide/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './shared/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { QuillEditorComponent } from './carousel-edit/carousel-detail/quill-editor/quill-editor.component';
import { EditableComponent } from './carousel-edit/carousel-detail/quill-editor/editable/editable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateCarouselComponent } from './dashboard/create-carousel/create-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CarouselListComponent,
    CarouselEditComponent,
    SlideComponent,
    FooterComponent,
    PageNotFoundComponent,
    CarouselDetailComponent,
    CarouselThumbnailsComponent,
    TemplateComponent,
    AuthComponent,
    QuillEditorComponent,
    EditableComponent,
    CreateCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
