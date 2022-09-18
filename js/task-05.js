const refs ={
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(evt){
refs.spanEl.textContent = evt.currentTarget.value;
}