import { Component } from '@angular/core';
import { Character } from '../interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainDbzComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    },
  ]
  onNewCharacter(character: Character): void {
    if (character.name !== '' && !this.characters.includes(character)) {
      
      this.characters.unshift(character)

    }

  }
}
