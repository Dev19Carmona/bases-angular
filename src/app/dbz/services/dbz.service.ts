import { Injectable } from '@angular/core';
import { Character } from '../interfaces';
import { getId } from '../../config';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}
  public characters: Character[] = [
    {
      id: getId(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: getId(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: getId(),
      name: 'Vegeta',
      power: 7500,
    },
  ];
  addCharacter(character: Character): void {
    if (
      character.name !== '' &&
      !this.characters.some((char) => char.name === character.name)
    ) {
      this.characters.push(character);
    }
  }
  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
