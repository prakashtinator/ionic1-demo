import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Vada Sambar',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/816/895/618/cuisine-food-india-indian-wallpaper-preview.jpg',
      ingredients: ['vada', 'sambar']
    },
    {
      id: 'r2',
      title: 'Gol Gappas',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/284/245/146/cuisine-food-india-indian-wallpaper-preview.jpg',
      ingredients: ['gol', 'gappas']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => recipe.id === recipeId);
  }
}
