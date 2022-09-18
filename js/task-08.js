const refs = {
  formEl: document.querySelector('.login-form'),
  formFieldEl: document.querySelector('input'),
  btnEl: document.querySelector('.button'),
}

refs.formEl.addEventListener('submit', onFormSubmin);
const data = {};

function onFormSubmin(event){
  // console.log(event.currentTarget);
  event.preventDefault();

  const {elements: {email, password}} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields should have a value!");
  }
  data.email = email.value;
  data.password = password.value;
  console.log(data);

  event.currentTarget.reset();

  return data;
}
