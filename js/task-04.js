let counterValue = 0;

const refs = {
  incrBtn: document.querySelector('[data-action="increment"]'),
  decrBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector('#value'),
}
refs.incrBtn.addEventListener('click', incrementHandler);
refs.decrBtn.addEventListener('click', decrementHandler);

console.log(refs.decrBtn);



function incrementHandler(){
  counterValue +=1;

  refs.valueEl.textContent = counterValue;
}
function decrementHandler(){
  counterValue -=1;
  refs.valueEl.textContent = counterValue;
}
