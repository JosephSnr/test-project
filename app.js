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
