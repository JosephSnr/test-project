var email = document.querySelector('#email');

email.addEventListener('change', function(e) {
  var re = /\S+@\S+\.\S+/
  if (re.test(e.target.value)) {
    e.target.setAttribute('style', 'border: 2px solid green');
  } else {
    e.target.setAttribute('style', 'border: 2px solid red');
  }
});
