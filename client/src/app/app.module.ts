import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { RoundProgressModule} from 'angular-svg-round-progressbar';
// angular material
import {MaterialModule} from './material.module';
// components
import {WelcomeModule} from '../components/Welcome/welcome.module';
import { SuccessPage, ErrorPage } from '../components';
// services
import {UserService} from '../service';
// shared
import {Footer, Header, Loading} from '../shared';
import { CurrecyWhole } from '../filters/currancyChange';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Loading,
    SuccessPage,
    ErrorPage,
    CurrecyWhole
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    WelcomeModule,
    RoundProgressModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
