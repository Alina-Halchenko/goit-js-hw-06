function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('#controls input');
const divEl = document.querySelector('#controls')
const containerDiv = document.querySelector('#boxes');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
let divsToAdd = [];


console.log('inputEl', inputEl);
console.log('createBtn', createBtn);
console.log('destroyBtn', destroyBtn);

divEl.addEventListener('click', onButtonClick);

function onButtonClick(evt){
  if(evt.target == createBtn) {
  // console.log(evt);
  createBoxes(evt.currentTarget.firstElementChild.value);

  } else if (evt.target == destroyBtn){
    destroyBoxes();
  }
}

function createBoxes(amount) {
  // console.log('here is my createBoxes', amount);

  for (let i=0, size =30; i<=amount -1; size +=10, i +=1) {
    divsToAdd.push(size);
      }
    console.log(divsToAdd);

    const newAr = divsToAdd
    .map(size => 
      {const newDiv = document.createElement('div');
      newDiv.width = size;
      newDiv.height = size;
      newDiv.style.backgroundColor = getRandomHexColor();
      console.table('newDiv', newDiv)
      return newDiv;
      });

    console.log('newAr', newAr);
    containerDiv.append(...newAr);
    console.table("containerDiv", containerDiv);
    return containerDiv;

};


function destroyBoxes() {
  console.log('here is my destroyBoxes');
  containerDiv.innerHTML = '';
}


// `<div width = "${size}" height = "${size}"></div>` - створює діви з правильним розміром
