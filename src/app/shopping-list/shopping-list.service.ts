import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients =  [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}