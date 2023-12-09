import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../models/movies';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private moviesService: MovieServiceService
  ) {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  addMovie() {
    const title = this.myForm.get('title')?.value;
    const description = this.myForm.get('description')?.value;
    const year = this.myForm.get('year')?.value;

    const movie = new Movie(title, description, year);

    // add new movies by movies service
    this.moviesService.addMovie(movie);
    this.router.navigate(['/movies']);
  }
}
