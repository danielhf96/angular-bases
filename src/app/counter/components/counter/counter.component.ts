import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
      <p> Counter: {{ counter }}</p>

    <button (click)="increment(1)"> +1 </button>
    <button (click)="resetCounter()"> Reset </button>
    <button (click)="increment(-1)"> -1 </button>
  `
})

export class CounterComponent {
  public counter :number = 10;

  increment( value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
