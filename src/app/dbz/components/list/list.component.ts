import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input() public characters: Character[] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  ondeleteBtn(index?: string): void {
    if(!index) return;

    this.onDelete.emit(index);
  }


}
