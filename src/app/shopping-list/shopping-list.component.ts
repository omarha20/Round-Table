import { Component, OnInit } from '@angular/core';
import { ingredients } from './ingredients.model';
import { ShopppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShopppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredient: ingredients[];
    constructor(private shoppingListService: ShopppingListService) {

    }
    ngOnInit() {
      this.ingredient = this.shoppingListService.getIngredients();
    }
}
