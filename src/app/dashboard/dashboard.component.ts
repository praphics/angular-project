import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import {Standing} from '../standing';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  standings: Standing[];

  constructor(private teamService:TeamService) { }

  ngOnInit() {
  this.loadTable()
  }
   
   loadTable() {
   this.teamService.getTable().subscribe(standing => {
   this.standings = standing;
   console.log(this.standings);
   });

  }
 

  }


