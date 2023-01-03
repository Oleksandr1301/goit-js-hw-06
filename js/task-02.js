"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.classList.add('item');
  items.innerHTML = ingredient;
  ulList.append(items);
});

console.log(foodIngredients);