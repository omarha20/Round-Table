import { ingredients } from "../shopping-list/ingredients.model";
export class Recipe {
    name: string;
    imagePath: string;
    test: string;
    public ingredient: ingredients[];
constructor(name: string, imagePath: string, test: string, ingredient: ingredients[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.test = test;
        this.ingredient = ingredient;
}
}