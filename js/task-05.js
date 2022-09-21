const refs ={
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
}
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(evt){
  console.log(evt.currentTarget.value)
if (evt.currentTarget.value.trim()){
  return refs.spanEl.textContent = evt.currentTarget.value.trim();
}
'Anonymous'
}
