import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is a simply test recipe 1', 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Recipe('A test recipe 2', 'This is a simply test recipe 2', 'https://www.allrecipes.com/thmb/8K8WzkLfCBF7yWhv5AGQ6s72B1k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8642741_Harissa-Honey-Chicken_France-Cevallos_4x3-c9ccc0255e444b08bd9013fb83e21b30.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}