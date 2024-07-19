import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) { }

  get personajes(): Character[] {
    return this.dbzService.personajes;
  }

  onDeleteCharacter( id: string): void {
    this.dbzService.onDeleterCharacterById(id);
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
