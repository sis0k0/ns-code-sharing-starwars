import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie$: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.movie$ = this.moviesService.getById(data.id);
    });
  }
}
