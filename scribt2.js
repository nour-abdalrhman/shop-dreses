const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

switchToSignup.addEventListener('click', () => {
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
});

switchToLogin.addEventListener('click', () => {
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
});
