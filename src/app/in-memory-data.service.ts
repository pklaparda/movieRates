import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Movie } from "./movie";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [{id:2, rating:[3],name:"peli"}];
    return movies;
  }

  constructor() {}
}
