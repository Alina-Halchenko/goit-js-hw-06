const liItemEl = document.querySelectorAll('#categories .item');
const liFirstEl = document.querySelectorAll('.item > ul');

console.log('Number of categories:', liItemEl.length);
// console.log(liItemEl);
// console.log(liFirstEl);


liItemEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.innerText}`);
  console.log('Elements:', category.lastElementChild.querySelectorAll('li').length)
});
