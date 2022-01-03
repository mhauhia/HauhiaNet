import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotographyComponent } from './photography/photography.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { Gallery3Component } from './gallery3/gallery3.component';
import { Gallery4Component } from './gallery4/gallery4.component';
import { Gallery5Component } from './gallery5/gallery5.component';
import { Gallery6Component } from './gallery6/gallery6.component';

@NgModule({
  // With the routingComponents declaration it's only necessary to add routes to routing module.
  declarations: [AppComponent, routingComponents, PhotographyComponent, Gallery1Component, Gallery2Component, Gallery3Component, Gallery4Component, Gallery5Component, Gallery6Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
