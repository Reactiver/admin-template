import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {AppRoutingModule} from './app-routing.module';

const MODULES = [
  NbThemeModule.forRoot(),
  PagesModule,
  BrowserModule,
  AppRoutingModule,
];

const COMPONENTS = [
  AppComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [ ...MODULES ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
