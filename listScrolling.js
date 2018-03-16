var testListClearButtonElement = document.querySelector('#testListClearButton');
//var testListStartButtonElement = document.querySelector('#testListStartButton');
var testListElement = document.querySelector('#testList');
var ARRAY_LENGTH = 500;
var NEW_ELEMENTS_NUMBER = 100;
var i = 0;
var listItems = Array(ARRAY_LENGTH).fill('Элемент списка #').map(function(item, id) {
  return item + id;
});

function fillList() {
  var listItemElement;
  var listItemsFragment = document.createDocumentFragment();

  for (j = 0; j < NEW_ELEMENTS_NUMBER; j++) {
    if (i < ARRAY_LENGTH) {
      listItemElement = document.createElement('li');
      listItemElement.textContent = listItems[i];
      listItemsFragment.appendChild(listItemElement);
      i++;
    }
  }
  testListElement.appendChild(listItemsFragment);
}

fillList();

//testListStartButtonElement.addEventListener('click', listFilling);

testListElement.addEventListener('scroll', function(e) {
  if (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 100) {
    fillList();
  }
});

testListClearButtonElement.addEventListener('click', function(e) {
  while(testListElement.firstChild) {
    testListElement.removeChild(testListElement.firstChild);
  }
  i = 0;
  testListElement.scrollTop = 0;
  fillList();
});
