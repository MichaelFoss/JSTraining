import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
    <button (click)="goBack()">Back</button>
  `
})

export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.currentHero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input()
  currentHero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
}
