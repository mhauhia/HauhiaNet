import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

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
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
