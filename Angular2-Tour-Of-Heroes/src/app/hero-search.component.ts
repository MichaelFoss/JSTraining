import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extension
import 'rxjs/add/observable/of';

// Observable class operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: [ 'hero-search.component.css' ],
  providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      // Wait 300ms before requesting the result
      .debounceTime(300)
      // Ignore if the search terms are the same
      .distinctUntilChanged()
      // Switch to new observable if the term changed,
      // either http search observable,
      // or observable of empty heroes if no search term
      .switchMap((term: string) => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([])
      )
      .catch((error: any) => {
        // @TODO Add real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = [ '/detail', hero.id ];
    this.router.navigate(link);
  }
}
