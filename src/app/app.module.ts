import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"
import { SearchService } from './search.service';
import { UserComponent } from './user/user.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DatePipe } from './date.pipe';
import { LandComponent } from './land/land.component';
import {RoutingModule} from "./routing/routing.module";
import { BoldsDirective } from './bolds.directive'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoDetailsComponent,
    DatePipe,
    LandComponent,
    BoldsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
    // LoadingBarHttpClientModule,
    RoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
