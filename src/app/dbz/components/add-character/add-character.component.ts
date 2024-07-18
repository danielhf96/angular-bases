import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  // Para enviar datos al componente padre se debe hacer uso de @Output
  // Crear instancia de EventEmitter, que es un observable
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // Se crea una propiedad que estará relaciona por ngModel en el template
  public character: Character = {
    nombre: '',
    poder: 0
  };


  crearPersonaje():void {
    // Validar que el nombre no esté vacío
    if (this.character.nombre.trim().length === 0) {
      return;
    }

    // Emitir el evento al componente padre
    this.onNewCharacter.emit(this.character);
    this.character = { nombre: '', poder: 0 };
  }

}
