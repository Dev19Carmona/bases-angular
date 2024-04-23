import { Component,  } from "@angular/core";

@Component({
  selector: 'app-counter',
  // templateUrl: "./counter.component.html",
  template: `

  <h2>
  Counter: {{counter}}
</h2>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-this.counter)">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

  `

})
export class CounterComponent {
  public title: string = 'Counter';
  public counter: number = 0;
  increaseBy(number: number): void {
    if (this.counter + number >= 0) {
      this.counter += number;
    }
  }
}
