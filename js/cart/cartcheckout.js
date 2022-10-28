// import { jackets } from "./jacketsarray.js";

// const getCart = localStorage.getItem([1]);
// console.log(getCart);
import { awaitRemoveCart } from "./removefromcart.js";

const createCheckout = document.querySelector(".checkout_cart_summary");
const cartSumTotal = document.querySelector(".summary_total");

const sendOrderbutton = document.querySelector(".button_cart_empty");

sendOrderbutton.style.backgroundColor = "gray";

let checkLocalStorage = localStorage.getItem("addItemToCart");
checkLocalStorage = parseInt(checkLocalStorage);

const plainUrl = `https://api.dd2.no/wp-json/wc/v3/products`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}?consumer_key=${key}&consumer_secret=${secret}`;

if (checkLocalStorage > 0) {
  sendOrderbutton.disabled = false;
  sendOrderbutton.style.backgroundColor = "#427721";
} else {
  sendOrderbutton.disabled = true;
  sendOrderbutton.style.backgroundColor = "gray";
}

async function cartTotalCheckout(url) {
  const response = await fetch(url);
  const products = await response.json();
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === "addItemToCart") {
      continue;
    } else {
      function findId(products) {
        return products.id === key;
      }
      let price = products[i].price;
      let numberOfItems = localStorage.getItem(key);
      let subTotal = price * numberOfItems;
      total += subTotal;

      createCheckout.innerHTML += `
  <div class="summary" id="${products[i].id}">
          <img src="${products[i].images[0].src}" alt="${products[i].name}" class="summary_image" />
          <div class="summary_details">
            <div class="summary_checkout_h3">
              <p>Name:</p>
              <h3 class="checkout_h3">${products[i].name}</h3>
            </div>
            <div>
              <p>Price:</p>
              <p>${products[i].price} NOK</p>
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
              id="${products[i].id}" data-id="${products[i].id}" 
              data-jacketvalue="${localStorage.getItem(key)}"><i class="fa-xl fa-solid fa-square-minus"></i></button>
              <button class="button_adjust_cart button_add_jacket"  
              id="${products[i].id}" data-id="${products[i].id}" 
              data-jacketvalue="${localStorage.getItem(key)}"><i class="fa-xl fa-solid fa-square-plus"></i></button>
              <button class="button_adjust_cart button_delete" 
              id="${products[i].id}" 
              data-id="${products[i].id}"><i class="fa-xl fa-solid fa-trash"></i></button>
            
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
  awaitRemoveCart();
}

cartTotalCheckout(url);
