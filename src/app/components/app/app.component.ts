import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls:  ['app/components/app/styles.css']

})



export class AppComponent {
  title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;
    
    onSelect(hero: Hero): void {
        console.log('Hero selected', hero);
      this.selectedHero = hero;
    }
}
