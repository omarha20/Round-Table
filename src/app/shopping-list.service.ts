import { ingredients } from './shopping-list/ingredients.model';
import { EventEmitter } from '@angular/core';
export class ShopppingListService {
   private ingredient: ingredients[] = [
        new ingredients('Flour (cup)', 1),
        new ingredients('Salt (tbsp)', 1),
        new ingredients('Onions (Kg)', 0.5),
        new ingredients('Olive Oil (tbsp)', 3),
        new ingredients('Chicken Breast (Kg)', 1.2),
      ];
   getIngredients() {
    return this.ingredient;
   }
   addIngredient(ingredient: ingredients) {
    this.ingredient.push(ingredient);
   }
}