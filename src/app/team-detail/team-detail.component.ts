import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService }  from '../team.service';
import {Fixtures} from '../fixtures';
import { Match } from '../match';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {

  
   public team: Team;
   public match: Match;
   public match5: Match; 
  

  constructor(
  private route: ActivatedRoute,
  private teamService: TeamService,
  private location: Location){} 
  

  ngOnInit() {
    this.loadTeamDetail();
    this.loadAMatch();
    this.load5Match();
  }
  
   
   loadTeamDetail(){
      const id = +this.route.snapshot.paramMap.get('id');
      this.teamService.getTeam(id).subscribe(
      team => { this.team = team;
      console.log(this.team);
      })

   }

   stayhere(){
   this.loadTeamDetail()
   }

   loadAMatch(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getAMatch(id).subscribe(
    match => {
    this.match= match;
    console.log(this.match);
    });
    }

    load5Match(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.get5Match(id).subscribe(
    match5 => {
    this.match5= match5;
    console.log(this.match5);
    });
    }
   

   

   goBack(): void {
      this.location.back();
   }  

  }


