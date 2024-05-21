import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  

  constructor(private slSevervice: ShoppingListService){}


  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount =  this.amountInputRef.nativeElement.value;
    this.slSevervice.addIngredient(new Ingredient(ingName, ingAmount));
  }
}
