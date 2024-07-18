import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public personajes: Character[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },
    {
      nombre: 'Trunks',
      poder: 5000
    }
  ];

  onNewCharacter( character: Character): void {
    this.personajes.push(character);
  }

  onDeleteCharacter( index: number): void {
    this.personajes.splice(index, 1);
  }

}
