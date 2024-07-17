import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public edad: number = 28;

  get nombreCapitalizado(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.edad}`;
  }

  changeName(): void {
    this.name = 'Capitan America';
  }
  changeAge(): void {
    this.edad = 40;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.edad = 28;
  }
}
