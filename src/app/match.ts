import {Results} from './results';

export class Match {
	constructor( public _links: string, public matchday: string, public homeTeamName: string, public awayTeamName: string,result: Results) {}
}