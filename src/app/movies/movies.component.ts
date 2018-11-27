import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { Movie } from '../movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesApiService) { }

  ngOnInit() {
    this.movies$ = this.moviesService.getAll();
  }
}
