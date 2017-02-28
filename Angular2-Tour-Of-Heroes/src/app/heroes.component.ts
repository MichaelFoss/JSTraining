import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { DELAY } from './mock-heroes';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  currentHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes(DELAY)
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.currentHero = hero;
  };
}
