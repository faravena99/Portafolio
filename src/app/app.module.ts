import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOverlayModule } from './components/nav-overlay/nav-overlay.module';
import { MainModule } from './layouts/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    NavOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
