import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RateMovieComponent } from "./rate-movie/rate-movie.component";
import { MyRaitingsComponent } from "./my-raitings/my-raitings.component";

const routes: Routes = [
  { path: "", component: RateMovieComponent },
  { path: "rate-movie", component: RateMovieComponent },
  { path: "my-raitings", component: MyRaitingsComponent },
  { path: "**", component: RateMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
