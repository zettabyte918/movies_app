import { Injectable } from '@angular/core';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  movies: Movie[] = [
    new Movie('Inception', 'A mind-bending thriller', 2010),
    new Movie('The Shawshank Redemption', 'Drama and redemption', 1994),
  ];

  constructor() {}

  getMovies() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  getMovieByTitle(title: string) {
    const movie: any = this.movies.filter((movie: Movie) => {
      return movie.title == title;
    });

    return movie;
  }

  updateMovie(movie: Movie) {}
}
