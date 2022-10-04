import { inputValidate, emailValidate, phoneValidate } from "./modules/validate.js";
const form = document.querySelector("#form");

function validate(event) {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const firstNameError = document.querySelector("#firstName-error");
  const lastNameError = document.querySelector("#lastName-error");
  const emailError = document.querySelector("#email-error");
  const phoneError = document.querySelector("#phone-error");
  const success = document.querySelector(".form-success");

  success.innerHTML = "";
  event.preventDefault();

  if (inputValidate(firstName.value, 2)) {
    firstNameError.style.display = "none";
    document.getElementById("firstName").style.borderColor = "green";
  } else {
    firstNameError.style.display = "block";
    document.getElementById("firstName").style.borderColor = "red";
  }
  if (inputValidate(lastName.value, 2)) {
    lastNameError.style.display = "none";
    document.getElementById("lastName").style.borderColor = "green";
  } else {
    lastNameError.style.display = "block";
    document.getElementById("lastName").style.borderColor = "red";
  }
  if (emailValidate(email.value)) {
    emailError.style.display = "none";
    document.getElementById("email").style.borderColor = "green";
  } else {
    emailError.style.display = "block";
    document.getElementById("email").style.borderColor = "red";
  }
  if (phoneValidate(phone.value)) {
    phoneError.style.display = "none";
    document.getElementById("phone").style.borderColor = "green";
  } else {
    phoneError.style.display = "block";
    document.getElementById("phone").style.borderColor = "red";
  }
  if (
    inputValidate(firstName.value, 2) &&
    inputValidate(lastName.value, 2) &&
    emailValidate(email.value) &&
    phoneValidate(phone.value)
  ) {
    success.style.display = "block";
    success.innerHTML = `
      <div class="success-box">
      <div>Thank you!</div>
      <div>Your submission has been sent.</div>
      <div>Would you like to return to the <a href="index.html">Home Page</a> or <a href="products.html">Continue Shopping<a/></div>
      </div>`;
  }
}
form.addEventListener("submit", validate);
