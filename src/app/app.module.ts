import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvioncitoComponent } from './avioncito/avioncito.component';
import { RuedaComponent } from './avioncito/rueda/rueda.component';

@NgModule({
  declarations: [
    AppComponent,
    AvioncitoComponent,
    RuedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
