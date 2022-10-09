import { refreshCart } from "./refreshcart.js";

const addOneItem = document.querySelector(".button_add_jacket");
const removeOneItem = document.querySelector(".button_remove_jacket");
const deleteItem = document.querySelector(".button_delete");

const removeItemId = addOneItem.getAttribute("data-id");
const addItemId = addOneItem.getAttribute("data-id");
const cartNumberDisplay = document.querySelector(".cart_number");

addOneItem.addEventListener("click", () => {
  addItemToCart(addItemId);
});
removeOneItem.addEventListener("click", () => {
  removeItemToCart(removeItemId);
});
deleteItem.addEventListener("click", () => {
  deleteAllItems(removeItemId);
});

function deleteAllItems(removeItemId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  let productKey = localStorage.getItem(removeItemId);
  productKey = parseFloat(productKey);
  localStorage.setItem("addItemToCart", productNumber - productKey);
  localStorage.removeItem(removeItemId);
  document.querySelector(".summary").innerHTML = "";
  document.location.reload(true);
  refreshCart();
}

function addItemToCart(addItemId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  localStorage.setItem("addItemToCart", productNumber + 1);
  cartNumberDisplay.textContent = productNumber + 1;
  document.location.reload(true);
  addItem(addItemId);
}

function addItem(addItemId) {
  let cartItem = localStorage.getItem(addItemId);
  cartItem = parseInt(cartItem);
  localStorage.setItem(addItemId, cartItem + 1);
}

function removeItemToCart(removeItemId) {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);
  localStorage.setItem("addItemToCart", productNumber - 1);
  cartNumberDisplay.textContent = productNumber - 1;
  removeItem(removeItemId);
}
function removeItem(removeItemId) {
  let cartItem = localStorage.getItem(removeItemId);
  cartItem = parseInt(cartItem);
  if (cartItem === 1) {
    localStorage.removeItem(removeItemId);
    document.querySelector(".summary").innerHTML = "";
    document.location.reload(true);
  } else {
    localStorage.setItem(removeItemId, cartItem - 1);
    document.location.reload(true);
  }
}

refreshCart();
// document.location.reload(true) - Because page is being written dynamicall everytime
