import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CarouselEditComponent } from "./carousel-edit/carousel-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit', component: CarouselEditComponent },
  { path: 'new', component: CarouselEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
