const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const liEls = ingredients.map(element => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add('item');
  // console.log(liEl);
  return liEl;
})

// console.log(liEls);
ulEl.append(...liEls);