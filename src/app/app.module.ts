import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BarRatingModule } from "ngx-bar-rating";
import { NavbarComponent } from "./navbar/navbar.component";
import { RateMovieComponent } from "./rate-movie/rate-movie.component";
import { MyRaitingsComponent } from "./my-raitings/my-raitings.component";
import { AppBootstrapModule } from "./app-bootstrap.module";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RateMovieComponent,
    MyRaitingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule,
    AppBootstrapModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
