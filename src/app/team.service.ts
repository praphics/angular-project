import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Team} from './team';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Standing} from './standing';
import {Fixtures} from './fixtures';
import { Match } from './match';

const httpOptionsA = {
	headers: new HttpHeaders ({
		'X-Auth-Token': 'b2f225cfd71841ba9b8ce86759b45204'
	})
	};


@Injectable()

export class TeamService {
  
  
  private url: string = "assets/teams.json";
  
  private url1: string = "http://api.football-data.org/v1/competitions/445/leagueTable";

  private url2: string = "http://api.football-data.org/v1/competitions/445/fixtures?matchday=";
  
  private url3 = "http://api.football-data.org/v1/teams";

  constructor( private http: HttpClient) {}
   
   getTeams(): Observable<Team[]>{
   return this.http.get<Team[]>(this.url)
   .catch(this.errorHandler);
   }

   getTable(): Observable <Standing[]>
    { 
     return this.http.get<Standing[]>(this.url1, httpOptionsA)
     .catch(this.errorHandler); 
	}

	getFixtures(matchday: string): Observable <Fixtures[]>{
	return this.http.get<Fixtures[]>(this.url2+matchday,httpOptionsA)
	.catch(this.errorHandler);
	}

	getTeam(id: number): Observable<Team>{
     const urll = `${this.url3}/${id}`;
     return this.http.get<Team>(urll,httpOptionsA)
     .catch(this.errorHandler);
     }

     getMatches(id: number): Observable <Fixtures[]>{
	const urlm = `${this.url3}/${id}/fixtures`;
	return this.http.get<Fixtures[]>(urlm,httpOptionsA)
	.catch(this.errorHandler);
	}
    
     getAMatch(id: number): Observable <Match>{
	const urlam = `${this.url3}/${id}/fixtures?timeFrame=p23`;
	return this.http.get<Match>(urlam,httpOptionsA)
	.catch(this.errorHandler);
	}

	get5Match(id: number): Observable <Match>{
	const urla5m = `${this.url3}/${id}/fixtures?timeFrame=p47`;
	return this.http.get<Match>(urla5m,httpOptionsA)
	.catch(this.errorHandler);
	}



   errorHandler(error: HttpErrorResponse){
     return Observable.throw(error.message || "server error");
   }
 } 
