import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces';
import { getId } from '../../../config';

@Component({
  selector: 'app-list-dbz',
  templateUrl: 'list.component.html',
})
export class ListDbzComponent {
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: getId(),
      name: 'Vegeta',
      power: 9500,
    },
  ];
  public onDeleteCharacter(id: string): void {
    //TODO emitir el id del personaje
    // console.log(index);

    this.onDelete.emit(id);
  }
}
