import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Fixtures} from '../fixtures';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  id: number;
  fixtures: Fixtures[];
  
  constructor( private route: ActivatedRoute,
  private teamService: TeamService,
  private location: Location) { }

  ngOnInit() {
  this.loadMatches();
  }

  loadMatches(){
    this.id = +this.route.snapshot.paramMap.get('id');
      this.teamService.getMatches(this.id).subscribe(
      fixtures => { this.fixtures = fixtures;
      console.log(this.fixtures);
      });
    }

   goBack(): void {
      this.location.back();
   }   


}
