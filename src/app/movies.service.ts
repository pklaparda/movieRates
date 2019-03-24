import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Movie } from "./movie";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private moviesUrl = "api/movies";
  urlOmdb: string = "http://www.omdbapi.com/?apikey=6216c0b2";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  searchMovies = (term: string) => {
    return this.http.get(`${this.urlOmdb}&s=${term}`).pipe(
      tap(_res => console.log(_res)),
      catchError(this.handleError("searchMovies", []))
    );
  };

  getMyRatedMovies = () => {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      tap(_res => console.log(_res)),
      catchError(this.handleError<Movie[]>("getMyRatedMovies", []))
    );
  };

  rateMovie = (movie: Movie) => {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      tap(_res => console.log(_res)),
      catchError(this.handleError<Movie>("rateMovie"))
    );
  };

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
