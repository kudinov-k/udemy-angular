import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First recipe', 'Just test recipe',
      'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('Second recipe', 'Just test recipe',
      'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('Third recipe', 'Just test recipe',
      'https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
