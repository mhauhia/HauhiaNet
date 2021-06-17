import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';

// Määritellään linkit sivuille
// Path = hauhia.net/path
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'cv',
    component: CVComponent,
  },

  {
    path: 'photography',
    component: PhotographyComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CVComponent,
  HomeComponent,
  PhotographyComponent,
  ContactComponent,
];
