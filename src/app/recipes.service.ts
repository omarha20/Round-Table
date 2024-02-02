import {Recipe} from './recipes/recipes.model';
import { EventEmitter } from '@angular/core';
import { ingredients } from './shopping-list/ingredients.model';
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe('Sea food',
                   'https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                   'Delicious seafood dish served with lemon and sauce',
                   [
                    new ingredients('Meat', 1)
                  ]),
        new Recipe('StrawBerries',
                   'https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                   'beautiful fruit',
                   [new ingredients('maerftch', 77)])         
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}