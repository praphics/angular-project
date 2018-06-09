import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { NewsComponent } from './news/news.component';
import { TeamsComponent } from './teams/teams.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamService } from './team.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    FixturesComponent,
    NewsComponent,
    TeamsComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
