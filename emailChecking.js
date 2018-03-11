var email = document.querySelector('#email');

var EMAIL_PATTERN = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;

email.addEventListener('change', function(e) {
  if (EMAIL_PATTERN.test(e.target.value)) {
    e.target.setAttribute('style', 'border: 2px solid green');
  } else {
    e.target.setAttribute('style', 'border: 2px solid red');
  }
});
