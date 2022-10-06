// document.getElementById("addtocart");
// addtocart.addEventListener("click", function () {
//     function addToCart(id) {
//         const cart = loadFromStorage("cart");
//         cart.push(id);
//         saveToStorage("cart", cart);
//       }
//   }
// });

import { jackets } from "./jacketsarray.js";

let addtocart = document.getElementById("add-to-cart");
let cartId = addtocart.getAttribute("data-id");
let cartNumberDisplay = document.querySelector(".cart_number");

addtocart.addEventListener("click", () => {
  addItemToCart();
});

function refreshCart() {
  let productNumber = localStorage.getItem("addItemToCart");
  if (productNumber) {
    cartNumberDisplay.textContent = productNumber;
  }
}

function addItemToCart() {
  let productNumber = localStorage.getItem("addItemToCart");
  productNumber = parseInt(productNumber);

  if (productNumber) {
    localStorage.setItem("addItemToCart", productNumber + 1);
    cartNumberDisplay.textContent = productNumber + 1;
  } else {
    localStorage.setItem("addItemToCart", 1);
    cartNumberDisplay.textContent = 1;
  }
}
refreshCart();
