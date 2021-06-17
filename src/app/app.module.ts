import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  // With the routingComponents declaration it's only necessary to add routes to routing module.
  declarations: [AppComponent, routingComponents, PhotographyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
