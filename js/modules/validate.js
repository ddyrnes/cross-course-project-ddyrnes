export function inputValidate(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}
export function emailValidate(email) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = regEx.test(email);
  return emailValid;
}
export function phoneValidate(phone) {
  var regEx = /^\d{8}$/;
  const phoneValid = regEx.test(phone);
  return phoneValid;
}
export function zipCodeValidate(zipCode) {
  var regEx = /^\d{4}$/;
  const zipCodeValid = regEx.test(zipCode);
  return zipCodeValid;
}
export function cardNumberValidate(cardNumber) {
  var regEx = /^\d{16}$/;
  const cardNumberValid = regEx.test(cardNumber);
  return cardNumberValid;
}
export function expiryDateValidate(expiryDate) {
  var regEx = /^\d{2}\/\d{2}$/g;
  const expiryDateValid = regEx.test(expiryDate);
  return expiryDateValid;
}
export function cvccvvValidate(cvccvv) {
  var regEx = /^[0-9]{3,4}$/;
  const cvccvvValid = regEx.test(cvccvv);
  return cvccvvValid;
}
