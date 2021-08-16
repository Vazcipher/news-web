import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsApiServiceService} from './service/news-api-service.service';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component'
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    SportsNewsComponent,
    EntertainmentComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
