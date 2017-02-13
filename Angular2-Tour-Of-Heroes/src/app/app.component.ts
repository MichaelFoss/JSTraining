import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

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
  currentHero = {
    id: 1,
    name: 'Storm'
  };
}
