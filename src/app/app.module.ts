import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProjectComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
