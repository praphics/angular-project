import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { NewsComponent } from './news/news.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component'; 

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 { path: 'dashboard', component: DashboardComponent},
 { path: 'table', component: TableComponent},
 { path: 'detail/:id', component: TeamDetailComponent },
 { path: 'fixtures', component: FixturesComponent},
 { path: 'fixtures/:id', component: FixturesComponent},
 { path: 'teams', component: TeamsComponent},
 { path: 'detail/:id/matches', component: NewsComponent}
  
 ];  
  
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
 })



export class AppRoutingModule { }
