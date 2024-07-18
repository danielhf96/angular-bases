import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input() public characters: Character[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  ondeleteBtn(index: number): void {
    this.onDelete.emit(index);
  }


}
