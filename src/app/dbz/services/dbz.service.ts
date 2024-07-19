import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public personajes: Character[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 15000
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      poder: 5000
    }
  ];

  addCharacter( character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.personajes.push(newCharacter);
  }

  onDeleteCharacter( index: number): void {
    this.personajes.splice(index, 1);
  }

  onDeleterCharacterById( id: string): void {
    this.personajes = this.personajes.filter( character => character.id !== id);
  }

}
