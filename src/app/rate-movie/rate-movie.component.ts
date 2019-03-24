import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movie } from "../movie";

@Component({
  selector: "app-rate-movie",
  templateUrl: "./rate-movie.component.html",
  styleUrls: ["./rate-movie.component.scss"]
})
export class RateMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  rateMovie = (movie: Movie) => {
    this.moviesService
      .rateMovie(movie)
      .subscribe(_ => console.log("movie rated"));
  };
}
