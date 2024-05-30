import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Or import SharedModule instead
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule,],  // Or SharedModule instead
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailService) {
    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data;
    });
  }
}
