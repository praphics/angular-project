import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']

})

export class TeamsComponent implements OnInit {
  
   myTeams: Team[];
 
 
  constructor(private teamService: TeamService) { }

  ngOnInit() {
     this.loadTeams();
  }

  loadTeams(){
   this.teamService.getTeams().subscribe(
    res => { this.myTeams = res;
    console.log(this.myTeams);
    });

  }

}
