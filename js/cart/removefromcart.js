import { refreshCart } from "./refreshcart.js";

const addOneItem = document.querySelector(".button_add_jacket");
const removeOneItem = document.querySelector(".button_remove_jacket");

const addItemId = addOneItem.getAttribute("data-id");
const removeItemId = addOneItem.getAttribute("data-id");
const cartNumberDisplay = document.querySelector(".cart_number");

const deleteItem = document.querySelector(".button_delete");

addOneItem.addEventListener("click", () => {
  addItemToCart(addItemId);
});
removeOneItem.addEventListener("click", () => {
  removeItemToCart(removeItemId);
});
deleteItem.addEventListener("click", () => {
  localStorage.clear();
});

function addItemToCart(addItemId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("addItemToCart", productNumber + 1);
    cartNumberDisplay.textContent = productNumber + 1;
  } else {
    localStorage.setItem("addItemToCart", 1);
    cartNumberDisplay.textContent = 1;
  }
  addItem(addItemId);
}
function addItem(addItemId) {
  let cartItem = localStorage.getItem(addItemId);
  cartItem = parseInt(cartItem);
  if (cartItem) {
    localStorage.setItem(addItemId, cartItem + 1);
  } else {
    localStorage.setItem(addItemId, 1);
  }
}

function removeItemToCart(removeItemId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("addItemToCart", productNumber - 1);
    cartNumberDisplay.textContent = productNumber - 1;
  } else {
    localStorage.setItem("addItemToCart", 0);
    cartNumberDisplay.textContent = 0;
  }
  removeItem(removeItemId);
}
function removeItem(removeItemId) {
  let cartItem = localStorage.getItem(removeItemId);
  cartItem = parseInt(cartItem);
  if (cartItem) {
    localStorage.setItem(removeItemId, cartItem - 1);
  } else {
    localStorage.setItem(removeItemId, 0);
  }
}

refreshCart();
// need to refresh cartcheckout.js
