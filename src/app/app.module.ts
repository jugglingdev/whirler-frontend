import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { CarouselListComponent } from './dashboard/carousel-list/carousel-list.component';
import { CarouselListItemComponent } from './dashboard/carousel-list/carousel-list-item/carousel-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    CarouselComponent,
    HeaderComponent,
    CarouselListComponent,
    CarouselListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
