const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }

  const userInfo = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(userInfo);

  form.reset();
}
