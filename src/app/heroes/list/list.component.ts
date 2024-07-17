import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Thor', 'Ironman'];
  public lastHeroDeleted ?: string;

  deleteLastHero(): void {
    this.lastHeroDeleted = this.heroes.pop();
  }

}
