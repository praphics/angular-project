import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Fixtures} from '../fixtures';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesComponent implements OnInit {
   
  matchday: number = 38;
  fixtures : Fixtures[];
   
  constructor(private teamService: TeamService) { }

  ngOnInit() {
     this.loadFixtures(this.matchday.toString());

  }
  goPrevious(){
    var previousId = this.matchday-1;
    if(previousId>=1){
    var p = previousId.toString();
    this.loadFixtures(p);
    this.matchday--;
    }
    
   }

  goNext(){
    var nextId = this.matchday+1;
    if(nextId<=38){
    var n = nextId.toString();
    this.loadFixtures(n);
    this.matchday++;
    }
    
  }

  loadFixtures(matchday: string){
    this.teamService.getFixtures(matchday).subscribe(
    fixtures => {
    this.fixtures = fixtures;
    console.log(this.fixtures);
    });
  }
   

}
