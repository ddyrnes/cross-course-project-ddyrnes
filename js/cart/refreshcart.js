let cartNumberDisplay = document.querySelector(".cart_number");

export function refreshCart() {
  let productNumber = localStorage.getItem("addItemToCart");
  if (productNumber) {
    cartNumberDisplay.textContent = productNumber;
  }
}
refreshCart();
