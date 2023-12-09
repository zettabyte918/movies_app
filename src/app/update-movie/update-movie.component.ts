import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
})
export class UpdateMovieComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MovieServiceService
  ) {
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
    });
  }

  updateMovie() {
    const movie: Movie = this.myForm.value;
  }

  ngOnInit(): void {
    const movieTitle = this.route.snapshot.paramMap.get('title') || '';
    if (movieTitle) {
      let movie: any = this.moviesService.getMovieByTitle(movieTitle)[0];

      this.myForm.get('title')?.setValue(movie.title);
      this.myForm.get('description')?.setValue(movie.description);
      this.myForm.get('year')?.setValue(movie.year);
    }
  }
}
