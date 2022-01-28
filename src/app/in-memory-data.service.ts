import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { id: 11, name: 'Lewis Hamilton' },
      { id: 12, name: 'Max Verstappen' },
      { id: 13, name: 'Fernando Alonso' },
      { id: 14, name: 'Valterri Bottas' },
      { id: 15, name: 'Kimi Raikonnen' },
      { id: 16, name: 'Pierre Gasly' },
      { id: 17, name: 'Sebastian Vettel' },
      { id: 18, name: 'Nikki Lauda' },
      { id: 19, name: 'Ayrton Senna' },
      { id: 20, name: 'Lando Norris' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
