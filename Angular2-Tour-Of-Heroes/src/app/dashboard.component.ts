import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { DELAY } from './mock-heroes';

@Component({
  moduleId: module.id,
  selector: 'Dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes(DELAY)
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
