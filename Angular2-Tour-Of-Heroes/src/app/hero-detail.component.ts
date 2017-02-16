import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
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
  `
})

export class HeroDetailComponent {
  @Input()
  currentHero: Hero;
}
