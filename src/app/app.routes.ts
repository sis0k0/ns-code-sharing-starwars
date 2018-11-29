import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesListComponent,
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
  },
];
