const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Check email valid
function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (username.value == '') {
    //alert('Username is required');
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value == '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }

  if (password.value == '') {
    //alert('Username is required');
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value == '') {
    //alert('Username is required');
    showError(password2, 'Password 2 is required');
  } else {
    showSuccess(password2);
  }
});
