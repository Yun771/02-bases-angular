import { Component } from '@angular/core';

@Component( {
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
} )
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public deletedHereo?: string;

  removeLastHero(): void {
    this.deletedHereo = this.heroNames.pop();
  }
}
