import { Component } from '@angular/core';
import { Movie } from '../models/movies';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies!: Movie[];

  constructor(private moviesService: MovieServiceService) {
    this.movies = this.moviesService.getMovies();
  }
}
