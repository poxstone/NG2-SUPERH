import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	styleUrls: ['dashboard.component.css'],
	templateUrl: 'dashboard.component.html'
})


export class DashboardComponent implements OnInit{
	title = '<b>Tour of Heroes</b>'; 
	heroes: Hero[];

	ngOnInit(): void {
		this.heroService.getHeroes()
		  .then( heroes => this.heroes = heroes.slice(1, 5))
	}

	constructor (
		private heroService: HeroService
	) {}
}
