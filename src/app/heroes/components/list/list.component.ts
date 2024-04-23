import { Component } from '@angular/core';
import { Hero } from '../hero/hero.interfaces';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public deletedHero?: string;
  public heroes: Hero[] = [
    {
      name: 'Capitán América',
      age: 'Desconocida',
      method: 'Escudo',
      capitalizado: 'Escudo del Capitán América',
    },
    {
      name: 'Iron Man',
      age: 'Desconocida',
      method: 'Tecnología',
      capitalizado: 'Tecnología de Iron Man',
    },
    {
      name: 'Spider-Man',
      age: 'Desconocida',
      method: 'Telarañas',
      capitalizado: 'Telarañas de Spider-Man',
    },
    {
      name: 'Thor',
      age: 'Desconocida',
      method: 'Martillo',
      capitalizado: 'Martillo de Thor',
    },
    {
      name: 'Hulk',
      age: 'Desconocida',
      method: 'Fuerza Sobrehumana',
      capitalizado: 'Fuerza de Hulk',
    },
    // Agrega más héroes aquí
  ];

  deleteLastHero(): void {
    if (this.heroes.length > 0) {
      const deletedHero = this.heroes.pop();
      this.deletedHero = deletedHero ? deletedHero?.name : '';
    }
  }
}
