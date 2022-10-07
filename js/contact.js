import { inputValidate, emailValidate, phoneValidate } from "./modules/validate.js";
const form = document.querySelector("#form");

// const firstName = document.getElementById("firstName");
// firstName.addEventListener("focus", (event) => {
//   firstName.style.backgroundColor = "";
// });
// firstName.addEventListener("blur", (event) => {
//   firstName.style.backgroundColor = "green";
// });

function validate(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const firstNameError = document.querySelector("#firstName-error");
  const lastNameError = document.querySelector("#lastName-error");
  const emailError = document.querySelector("#email-error");
  const phoneError = document.querySelector("#phone-error");
  const commentsError = document.querySelector("#comments-error");
  const success = document.querySelector(".form-success");
  const contact = document.querySelector(".contact");

  const ctaError = document.querySelector(".send_order_cta_error");

  success.innerHTML = "";

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
  if (inputValidate(comments.value, 5)) {
    commentsError.style.display = "none";
    document.getElementById("comments").style.borderColor = "green";
  } else {
    commentsError.style.display = "block";
    document.getElementById("comments").style.borderColor = "red";
  }

  if (
    inputValidate(firstName.value, 2) &&
    inputValidate(lastName.value, 2) &&
    emailValidate(email.value) &&
    phoneValidate(phone.value) &&
    inputValidate(comments.value, 5)
  ) {
    success.style.display = "block";
    contact.style.display = "none";
    window.scrollTo(0, 0);
    success.innerHTML = `
      <div class="success-box">
      <h2>Thank you!</h2>
      <div>Your submission has been sent.</div>
      <div>Would you like to return to the:</div>
      <div><a class="cta cta_border" href="index.html">Home Page</a>
      or
      <a class="cta" href="products.html">Continue Shopping<a/></div>`;
  } else {
    ctaError.innerHTML = `<div class="cta_error">
      <p class="cta_error_p">We apologize!</p>
      <p>We are unable to submit the form.</p>
      <p>Please check that everything is filled out properly and try again.</p>
    
      </div>`;
  }
}
form.addEventListener("submit", validate);
