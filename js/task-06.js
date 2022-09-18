const inputEl = document.querySelector('input');
const validation = document.inputEl
// console.log(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(evt){
  // console.log(evt.currentTarget.value.trim().length);
  if (inputEl.getAttribute('data-length') == evt.currentTarget.value.trim().length) {
    // console.log("all good")
    inputEl.classList.add('valid');
  } else {
    // console.log('not good');
    inputEl.classList.add('invalid');
  }
  
}