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
import { CarouselCardComponent } from './dashboard/carousel-list/carousel-card/carousel-card.component';
import { SlideComponent } from './carousel-edit/slide/slide.component';
import { CarouselDetailComponent } from './carousel-edit/carousel-detail/carousel-detail.component';
import { CarouselThumbnailsComponent } from './carousel-edit/carousel-thumbnails/carousel-thumbnails.component';
import { TemplateComponent } from './carousel-edit/slide/template/template.component';
import { FormsModule } from '@angular/forms';
import { QuillTextEditorComponent } from './carousel-edit/carousel-detail/quill-text-editor/quill-text-editor.component';
import { QuillImageEditorComponent } from './carousel-edit/carousel-detail/quill-image-editor/quill-image-editor.component';
import { AuthComponent } from './shared/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CarouselListComponent,
    CarouselCardComponent,
    CarouselEditComponent,
    SlideComponent,
    FooterComponent,
    PageNotFoundComponent,
    CarouselDetailComponent,
    CarouselThumbnailsComponent,
    TemplateComponent,
    QuillTextEditorComponent,
    QuillImageEditorComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
