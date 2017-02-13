import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Storm' },
  { id: 2, name: 'Wolverine' },
  { id: 3, name: 'Cyclops' },
  { id: 4, name: 'Beast' },
  { id: 5, name: 'Nightcrawler' },
  { id: 6, name: 'Cable' },
  { id: 7, name: 'Dazzler' },
  { id: 8, name: 'Iceman' },
  { id: 9, name: 'Rogue' },
  { id: 10, name: 'Jean Grey' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{currentHero.name}} Details</h2>
    <div>
      <label>id: </label>{{currentHero.id}}
    </div>
    <div>
      <label>name: </label>
      <input type="text" [(ngModel)]="currentHero.name" placeholder="Name" />
    </div>
  `
})

export class AppComponent  {
  title = 'Tour Of Heroes';
  heroes = HEROES;
  currentHero = {
    id: 1,
    name: 'Storm'
  };
}
