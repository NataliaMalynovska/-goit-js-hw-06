const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
const listElements = ingredients.map(option => {
const el = document.createElement("li");
el.classList.add("item");
el.textContent = option;
return el
});

console.log(listElements);

listIngredients.append(...listElements);

