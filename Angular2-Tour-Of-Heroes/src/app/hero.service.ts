import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(delay: number): Promise<Hero[]> {
    // Delay
    if (delay && Number.isInteger(delay)) {
      return new Promise<Hero[]>(resolve => {
        setTimeout(() => {
          resolve(this.getHeroes(0));
        }, delay);
      });
    }
    // No delay
    else {
      return Promise.resolve(HEROES);
    }
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes(0)
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
