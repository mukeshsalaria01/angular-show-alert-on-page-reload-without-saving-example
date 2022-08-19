import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CanDeactivateGuard} from './shared/components/can-deactivate/can-deactivate.guard';


@NgModule({
  declarations: [
    AppComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
