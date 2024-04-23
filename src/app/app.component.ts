import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bases';
  public counter: number = 10;
  increaseBy(number: number): void {
    if (this.counter + number >= 0) {
      this.counter += number;
    }
  }
}
