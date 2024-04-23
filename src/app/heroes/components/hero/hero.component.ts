import { Component } from '@angular/core';
import { Hero } from './hero.interfaces';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: string = '25'
  public hero: Hero = {
    name: 'Spiderman',
    age: '25',
    method: 'sin_metodo',
    capitalizado: 'ok'
  }
  get capitalizedName():string {
    return this.name.toUpperCase()
  }
  getHeroDescription ():string{
    return `${this.name} - ${this.age}`
  }
  changeName (name:string):void{
    this.name = name
  }
  changeAge (age:string):void{
    this.age = age
  }
}
