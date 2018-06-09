import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import {Standing} from '../standing';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  standings: Standing[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  this.loadTable();
  }

  loadTable() {
   this.teamService.getTable().subscribe(standing => {
   this.standings = standing;
   console.log(this.standings);
   });

  }

}
