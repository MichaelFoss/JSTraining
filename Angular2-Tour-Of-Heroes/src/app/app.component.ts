import { Component } from '@angular/core';
import { Hero } from './hero';

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
    <div *ngIf="currentHero">
      <h2>{{currentHero.name}} Details</h2>
      <div>
        <label>id: </label>{{currentHero.id}}
      </div>
      <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="currentHero.name" placeholder="Name" />
      </div>
    </div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === currentHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
      text-align: center;
      width: 1.2em;
    }
  `]
})

export class AppComponent  {
  title = 'Tour Of Heroes';
  heroes = HEROES;
  currentHero: Hero;
  onSelect(hero: Hero): void {
    this.currentHero = hero;
  }
}
