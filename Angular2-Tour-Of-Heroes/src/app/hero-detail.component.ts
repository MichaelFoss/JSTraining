import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

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

export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.currentHero = hero);
  }

  @Input()
  currentHero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }
}
