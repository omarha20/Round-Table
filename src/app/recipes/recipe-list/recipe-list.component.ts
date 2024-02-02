import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];
    ngOnInit() {
     this.recipes = this.recipeService.getRecipes();
    }
    constructor(private recipeService: RecipesService) {

    }
}
