import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { RouterModule, Routes } from '@angular/router';
//Service
import { LoggingService } from './services/logging.service';
import { MovieService } from './services/movie.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieAddEditComponent } from './components/movie-add-edit/movie-add-edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes : Routes = [
  {
    path : '',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  {
    path : 'index',
    component: HomeComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path: '**',
    component : NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MovieListComponent,
    MovieAddEditComponent,
    MenuComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoggingService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
