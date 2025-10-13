const form = document.querySelector(".form");
const inputEmail = document.querySelector(".form__input");
const btnSubmit = document.querySelector(".form__button");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const validation = validate_email(emailValue);

  if (!validation || inputEmail.value == "") {
    form.classList.add("error-state");
  }
  if (validation) {
    form.classList.remove("error-state");
    inputEmail.value = "";
  }
});

function validate_email(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}
