import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: Number){
    const hero = HEROES.find(h => h.id === id);

    this.messageService.add(`Hero Servvice: Fetched hero id=${id}`);
    return of(hero);

  }


}
