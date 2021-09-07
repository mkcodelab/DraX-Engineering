const signupBtn = document.querySelector('#signupBtn');
const signupForm = document.querySelector('.signup-form');
const signupCloseBtn = document.querySelector('#signupCloseBtn');
signupBtn.addEventListener('click', openSignupForm)
function openSignupForm() {
  signupForm.classList.add('signup-visible');
}

signupCloseBtn.addEventListener('click', closeSignupForm);

function closeSignupForm() {
  signupForm.classList.remove('signup-visible');
}