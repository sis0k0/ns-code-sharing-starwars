import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies = [
    {
      'title': 'Star Wars: Episode I - The Phantom Menace',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_1_poster.png?raw=true',
    },

    {
      'title': 'Star Wars: Episode II - Attack of the Clones',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_2_poster.png?raw=true',
    },

    {
      'title': 'Star Wars: Episode III - Revenge of the Sith',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_3_poster.png?raw=true',
    },

    {
      'title': 'Star Wars: Episode IV - A New Hope',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_4_poster.png?raw=true',
    },

    {
      'title': 'Star Wars: Episode V - The Empire Strikes Back',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_5_poster.png?raw=true',
    },

    {
      'title': 'Star Wars: Episode VI - Return of the Jedi',
      'poster': 'https://github.com/Package/Star-Wars-Express/blob/master/public/images/star_wars_episode_6_poster.png?raw=true',
    }
  ];

  constructor() { }

  getAll(): Observable<Movie[]> {
    return of(this.movies);
  }

  getById(id: number): Observable<Movie> | null {
    const movie = this.movies[id];
    if (!movie) {
      return;
    }

    return of(movie);
  }
}
