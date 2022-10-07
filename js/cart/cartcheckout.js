import { jackets } from "./jacketsarray.js";

// const getCart = localStorage.getItem([1]);
// console.log(getCart);
const createCheckout = document.querySelector(".checkout_cart_summary");
function cartTotalCheckout() {
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === "addItemToCart") {
      continue;
    } else {
      function findId(jackets) {
        return jackets.id === key;
      }
      let price = jackets.find(findId).price;
      let numberOfItems = localStorage.getItem(key);
      let subTotal = price * numberOfItems;
      console.log("Price=", total);
      total += subTotal;
      console.log(total);

      createCheckout.innerHTML += `
  <div class="summary">
          <img src="${jackets.find(findId).image}" alt="${jackets.find(findId).name}" class="summary_image" />
          <div class="summary_details">
            <div class="summary_checkout_h3">
              <h3 class="checkout_h3">${jackets.find(findId).name}</h3>
            </div>
            <div>
              <p>Price</p>
              <p>${jackets.find(findId).price} NOK</p>
            </div>
            <div>
              <p>Items:</p>
              <p>${localStorage.getItem(key)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${subTotal} NOK</p>
            </div>

          </div>
        </div>
        <div class="summary_details_total">
          <div class="summary_total">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
  `;
    }
  }
}
cartTotalCheckout();
console.log(total);
// function cartTotal() {
//   let total = 0;

//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     if (key === "addItemToCart") {
//       continue;
//     } else {
//       function findId(jackets) {
//         return jackets.id === key;
//       }
//       let price = jackets.find(findId).price;
//       let numberOfItems = localStorage.getItem(key);
//       let subTotal = price * numberOfItems;
//       console.log("Price=", total);
//       total += subTotal;
//       console.log(total);
//     }
//   }
// }
// cartTotal();
// function cartTotalCheckout2() {
//   let total = 0;
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     if (key === "addItemToCart") {
//       continue;
//     } else {
//       function findId(jackets) {
//         return jackets.id === key;
//       }
//       let price = jackets.find(findId).price;
//       let numberOfItems = localStorage.getItem(key);
//       let subTotal = price * numberOfItems; // Changed to subTotal
//       console.log("Price =", subTotal);
//       total += subTotal; // This updates your main total
//       console.log(total);
//     }
//   }
// }
// cartTotalCheckout2();
