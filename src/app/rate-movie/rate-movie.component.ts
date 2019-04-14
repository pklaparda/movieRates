import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Movie } from "../movie";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-rate-movie",
  templateUrl: "./rate-movie.component.html",
  styleUrls: ["./rate-movie.component.scss"]
})
export class RateMovieComponent implements OnInit {
  movies:Movie[]=null;
  private searchTerms = new Subject<string>();
  movieSelected:Movie;
  selectedMovieRate : number = 3;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => 
         this.moviesService.searchMovies(term)
    )).subscribe((res:any) => {
      if (res.Response === 'True') {
        this.movies = res.Search.map(({ Title, imdbID }) => new Movie(imdbID, Title));
        console.log(this.movies);
      }
      else {
        console.log(this.movies);
        this.movies = null;
      }
    });
  }

  searchMovie(term: string): void {
    this.searchTerms.next(term);
  }

  setSelected(movie:Movie){
    this.movieSelected = movie;
  }
    
  saveRate = () => {
      this.movieSelected.rating=[this.selectedMovieRate];
      this.moviesService.rateMovie(this.movieSelected).subscribe(_=>{
        this.movieSelected=null;
        this.selectedMovieRate=null;
      });
  }
}
