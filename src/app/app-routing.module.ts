import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { Gallery3Component } from './gallery3/gallery3.component';
import { Gallery4Component } from './gallery4/gallery4.component';
import { Gallery5Component } from './gallery5/gallery5.component';
import { Gallery6Component } from './gallery6/gallery6.component';
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
    children: [
      { path: 'gallery1', component: Gallery1Component },
      { path: 'gallery2', component: Gallery2Component },
      { path: 'gallery3', component: Gallery3Component },
      { path: 'gallery4', component: Gallery4Component },
      { path: 'gallery5', component: Gallery5Component },
      { path: 'gallery6', component: Gallery6Component },
    ],
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
  Gallery1Component,
  Gallery2Component,
  Gallery3Component,
  Gallery4Component,
  Gallery5Component,
  Gallery6Component,
];
