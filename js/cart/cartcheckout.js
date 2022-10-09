import { jackets } from "./jacketsarray.js";

// const getCart = localStorage.getItem([1]);
// console.log(getCart);
const createCheckout = document.querySelector(".checkout_cart_summary");
const cartSumTotal = document.querySelector(".summary_total");

const sendOrderbutton = document.querySelector(".button_cart_empty");

sendOrderbutton.style.backgroundColor = "gray";

if (localStorage.getItem("addItemToCart")) {
  sendOrderbutton.disabled = false;
  sendOrderbutton.style.backgroundColor = "#427721";
} else {
  sendOrderbutton.disabled = true;
  sendOrderbutton.style.backgroundColor = "gray";
}

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
      total += subTotal;

      createCheckout.innerHTML += `
  <div class="summary" id="${jackets.find(findId).id}">
          <img src="${jackets.find(findId).image}" alt="${jackets.find(findId).name}" class="summary_image" />
          <div class="summary_details">
            <div class="summary_checkout_h3">
              <p>Name:</p>
              <h3 class="checkout_h3">${jackets.find(findId).name}</h3>
            </div>
            <div>
              <p>Price:</p>
              <p>${jackets.find(findId).price} NOK</p>
            </div>
            <div>
              <p>Items:</p>
              <p>${localStorage.getItem(key)}</p>
            </div>
            <div>
              <p>Subtotal:</p>
              <p>${subTotal.toFixed(2)} NOK</p>
            </div>
            <div class="button_adjust_cart_parent">
              <button class="button_adjust_cart button_remove_jacket" 
              id="${jackets.find(findId).id}" data-id="${jackets.find(findId).id}" 
              data-jacketvalue="${localStorage.getItem(key)}"><i class="fa-xl fa-solid fa-square-minus"></i></button>
              <button class="button_adjust_cart button_add_jacket"  
              id="${jackets.find(findId).id}" data-id="${jackets.find(findId).id}" 
              data-jacketvalue="${localStorage.getItem(key)}"><i class="fa-xl fa-solid fa-square-plus"></i></button>
              <button class="button_adjust_cart button_delete" 
              id="${jackets.find(findId).id}" 
              data-id="${jackets.find(findId).id}"><i class="fa-xl fa-solid fa-trash"></i></button>
            
              </div>
            

          </div>
        </div>
      </div>
  `;
      cartSumTotal.innerHTML = `
      <div class="summary_checkout_h3 summary_checkout_total">
        <p>Total</p>
        <h3 class="checkout_h3">${total.toFixed(2)} NOK</h3>
      </div>
      `;
    }
  }
}

cartTotalCheckout();
