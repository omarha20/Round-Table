import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ingredients } from '../ingredients.model';
import { ShopppingListService } from '../../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
constructor(private shlS: ShopppingListService) {

}
 onAddItem() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIng = new ingredients(ingName, ingAmount);
  this.shlS.addIngredient(newIng);
  }
  ngOnInit() {
    
  }
}
