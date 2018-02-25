/*
var button = document.querySelector('button');

button.addEventListener('click', function (e) {
  e.preventDefault();
});

var input = document.querySelector('input');

input.addEventListener('input', function (e) {
  console.log(e.target.value);
});
*/

/*
window.addEventListener('mousemove', function (e) {
  console.log(e.clientY, e.clientX);
  console.log(e.screenY, e.screenX);
});
*/

var outer = document.querySelector('.outer');

function onInnerBlockClick(e) {
  if (e.target.classList.contains('inner')) {
    e.target.classList.toggle('red');
    console.log(e.target.dataset.index);
  }
}

outer.addEventListener('click', onInnerBlockClick);

/*
for (var i = 0; i < innerBlocks.length; i++) {
  innerBlocks[i].addEventListener('click', onInnerBlockClick);
}
*/

var form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit');
});

////////////////////////////////////////////////////////////
var secondForm = document.querySelector('#form2');
var textInput = document.querySelector('#textInput');
var numberInput = document.querySelector('#numberInput');

textInput.addEventListener('input', function (e) {
  if (!e.currentTarget.validity.valid) {
    e.currentTarget.setCustomValidity('');
  } else {
    e.currentTarget.setCustomValidity('Вы ввели неправильный текст!');
  }
});

secondForm.addEventListener('submit', function (e) {
  if (!textInput.validity.valid) {
    console.log('textInput is invalid');
    e.preventDefault();
  }
});
////////////////////////////////////////////////////////////////

var firstListFillButtonElement = document.querySelector('#firstListFillButton');
var firstListClearButtonElement = document.querySelector('#firstListClearButton');
var firstListElement = document.querySelector('#firstList');
var ARRAY_LENGTH = 100000;
var listItems = Array(ARRAY_LENGTH).fill('Элемент списка #').map(function (item, id) {
  return item + id;
});

firstListFillButtonElement.addEventListener('click', function (e) {
  var listItemElement;
  var listItemsFragment = document.createDocumentFragment();

  for (var j = 0; j < ARRAY_LENGTH; j += 1) {
    listItemElement = document.createElement('li');
    listItemElement.textContent = listItems[j];
    listItemsFragment.appendChild(listItemElement);
  }

  firstListElement.appendChild(listItemsFragment);
});

firstListClearButtonElement.addEventListener('click', function (e) {
  while(firstListElement.firstChild) {
    firstListElement.removeChild(firstListElement.firstChild);
  }
});
