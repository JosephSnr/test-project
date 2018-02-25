// Задача с квадратами
var field_1 = document.querySelector('.field_1');

function OnAnyFieldClick(e) {
  e.target.classList.toggle(e.target.dataset.color);
}

field_1.addEventListener('click', OnAnyFieldClick);

// Задача с формой
var form = document.querySelector('.form');

var progress = document.getElementById('progress');
var answer = document.getElementById('answer');
var male = document.getElementById('Male');
var female = document.getElementById('Female');
var IGNORE_SELECT_VALUE = 'Выберите направление';
var i = 0;

form.addEventListener('change', function(e) {
  if (Number(e.target.dataset.index) !== 1) {
    i++;
    e.target.dataset.index = 1;
      if (Number(male.getAttribute('data-index')) + Number(female.getAttribute('data-index')) === 1) {
        male.setAttribute('data-index', 1);
        female.setAttribute('data-index', 1);
      }
    }
  if ((e.target.value === '' || e.target.value === IGNORE_SELECT_VALUE) && Number(e.target.dataset.index) === 1) {
    i--;
    e.target.dataset.index = 0;
  }
  progress.setAttribute('value', i);
  //console.log(e.target.value);
  //console.log(Number(Male.getAttribute('data-index')) + Number(Female.getAttribute('data-index')));
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (progress.getAttribute('value') < progress.getAttribute('max')) {
    answer.innerHTML = 'Заполните все поля'
  }
  else {
    answer.innerHTML = 'Ваша заявка принята';
  }
});
