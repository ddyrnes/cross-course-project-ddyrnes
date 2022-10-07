import {
  inputValidate,
  emailValidate,
  phoneValidate,
  zipCodeValidate,
  cardNumberValidate,
  expiryDateValidate,
  cvccvvValidate,
} from "./modules/validate.js";
const form = document.querySelector("#form");

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

  const address = document.getElementById("address");
  const addressError = document.querySelector("#address-error");
  const zipCode = document.getElementById("zipCode");
  const zipCodeError = document.querySelector("#zipCode-error");
  const city = document.getElementById("city");
  const cityError = document.querySelector("#city-error");
  const country = document.getElementById("country");
  const countryError = document.querySelector("#country-error");

  const cardNumber = document.getElementById("cardNumber");
  const cardNumberError = document.querySelector("#cardNumber-error");
  const expiryDate = document.getElementById("expiryDate");
  const expiryDateError = document.querySelector("#expiryDate-error");
  const cvccvv = document.getElementById("cvccvv");
  const cvccvvError = document.querySelector("#cvccvv-error");

  const ctaError = document.querySelector(".send_order_cta_error");

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
  if (inputValidate(address.value, 3)) {
    addressError.style.display = "none";
    document.getElementById("address").style.borderColor = "green";
  } else {
    addressError.style.display = "block";
    document.getElementById("address").style.borderColor = "red";
  }
  if (zipCodeValidate(zipCode.value)) {
    zipCodeError.style.display = "none";
    document.getElementById("zipCode").style.borderColor = "green";
  } else {
    zipCodeError.style.display = "block";
    document.getElementById("zipCode").style.borderColor = "red";
  }
  if (inputValidate(city.value, 2)) {
    cityError.style.display = "none";
    document.getElementById("city").style.borderColor = "green";
  } else {
    cityError.style.display = "block";
    document.getElementById("city").style.borderColor = "red";
  }
  if (inputValidate(country.value, 2)) {
    countryError.style.display = "none";
    document.getElementById("country").style.borderColor = "green";
  } else {
    countryError.style.display = "block";
    document.getElementById("country").style.borderColor = "red";
  }
  if (cardNumberValidate(cardNumber.value)) {
    cardNumberError.style.display = "none";
    document.getElementById("cardNumber").style.borderColor = "green";
  } else {
    cardNumberError.style.display = "block";
    document.getElementById("cardNumber").style.borderColor = "red";
  }
  if (expiryDateValidate(expiryDate.value)) {
    expiryDateError.style.display = "none";
    document.getElementById("expiryDate").style.borderColor = "green";
  } else {
    expiryDateError.style.display = "block";
    document.getElementById("expiryDate").style.borderColor = "red";
  }
  if (cvccvvValidate(cvccvv.value)) {
    cvccvvError.style.display = "none";
    document.getElementById("cvccvv").style.borderColor = "green";
  } else {
    cvccvvError.style.display = "block";
    document.getElementById("cvccvv").style.borderColor = "red";
  }
  if (
    inputValidate(firstName.value, 2) &&
    inputValidate(lastName.value, 2) &&
    emailValidate(email.value) &&
    phoneValidate(phone.value) &&
    inputValidate(address.value, 3) &&
    zipCodeValidate(zipCode.value) &&
    inputValidate(city.value, 2) &&
    inputValidate(country.value, 2) &&
    cardNumberValidate(cardNumber.value) &&
    expiryDateValidate(expiryDate.value) &&
    cvccvvValidate(cvccvv.value)
  ) {
    localStorage.clear();
    location.href = "orderconfirmation.html";
  } else {
    ctaError.innerHTML = `<div class="cta_error">
    <p class="cta_error_p">We apologize!</p>
    <p>We are unable to submit the form.</p>
    <p>Please check that everything is filled out properly and try again.</p>
  
    </div>`;
  }
}
form.addEventListener("submit", validate);
