import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	styleUrls: ['hero-detail.component.css'],
	templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	ngOnInit(): void {
		this.route.params
		  .switchMap((params: Params) => this.heroService.getHeroe(+params['id']))
		  .subscribe( hero => this.hero = hero );
	}

	constructor (
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location,
	){}

	goBack() {
		this.location.back();
	}
}
