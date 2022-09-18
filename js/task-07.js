const inputEl = document.querySelector('#font-size-control');
const spamEl = document.querySelector('#text');
console.log(text.style.fontSize);

inputEl.value = 16;
inputEl.addEventListener('input', onChangeRange);
console.log(inputEl.value);

function onChangeRange(event){
  spamEl.style.fontSize = inputEl.value + 'px';
}
