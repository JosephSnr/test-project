var field_1 = document.querySelector('.field_1');

function OnAnyFieldClick(e) {
  e.target.classList.toggle(e.target.dataset.color);
}

field_1.addEventListener('click', OnAnyFieldClick);
