import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	styleUrls: [ 'heroes.component.css' ],
	templateUrl: 'heroes.component.html',
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	heroes = HEROES;
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService
	) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect( hero: Hero): void {
		console.log(hero);
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
