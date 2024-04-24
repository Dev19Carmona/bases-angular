import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-form-add-dbz',
  templateUrl: './form-add-dbz.component.html',
  styleUrl: './form-add-dbz.component.css',
})
export class FormAddDbzComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character})
    this.character.name = '';
    this.character.power = 0;
  }
}
