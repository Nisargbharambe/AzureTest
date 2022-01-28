import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { pipeFromArray } from 'rxjs/internal/util/pipe';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes'; // URL to web api;

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes():Observable<Hero[]> {
/*    const heroes = of(HEROES);
        // of(HEROES) : Converting HEROES into an observable type. 
        // In case of http.request(), it would return observable, so need to use of() there.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
*/
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero>{
    const Hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(Hero);
  }
}
