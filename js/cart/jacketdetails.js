// import { jackets } from "./jacketsarray.js";

// const selectContainer = document.querySelector(".main_product_name");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const jacketId = params.get("id");
// let id = jackets.find((item) => item.id === jacketId);

// export function jacketDetailDisplay() {
//   selectContainer.innerHTML = `
//   <section class="product_name_specific">
//         <figure class="product_name_picture">
//           <img src="${id.image}" alt="{id.name}" />
//         </figure>
//         <div class="product_name_details">
//           <div>
//             <h1 class="product_name_h1">${id.name}</h1>
//             <p class="product_name_p">${id.price} NOK</p>
//           <div class="product_details">
//             <h2>Details</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce. Facilisi
//               ornare adipiscing aliquet odio tincidunt diam viverra feugiat.
//             </p>
//           </div>
//           <div>
//             <button class="cta" id="add-to-cart" data-id="${id.id}">Add to cart</button>
//             <a href="products.html" class="cta cta_border">Continue Shopping</a>
//             <a href="checkout.html" class="cta cta_border">Checkout</a>
//           </div>

//         </div>
//       </section>
//   `;
// }
// jacketDetailDisplay();

import { awaitAddToCart } from "./addtocart.js";

const plainUrl = `https://api.dd2.no/wp-json/wc/v3/products`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}?consumer_key=${key}&consumer_secret=${secret}`;

const selectContainer = document.querySelector(".main_product_name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

export async function jacketDetailDisplay(url) {
  const response = await fetch(url);
  const products = await response.json();
  const jacketId = params.get("id");
  let id = products.find((item) => item.id === parseInt(jacketId));
  let productId = id.id.toString();
  selectContainer.innerHTML = `
  <section class="product_name_specific">
        <figure class="product_name_picture">
          <img src="${id.images[0].src}" alt="{id.name}" />
        </figure>
        <div class="product_name_details">
          <div>
            <h1 class="product_name_h1">${id.name}</h1>
            <p class="product_name_p">${id.price} NOK</p>
          <div class="product_details">
            <h2>Details</h2>
            <p>
              ${id.description}
            </p>
          </div>
          <div>
            <button class="cta" id="add-to-cart" data-id="${productId}">Add to cart</button>
            <a href="products.html" class="cta cta_border">Continue Shopping</a>
            <a href="checkout.html" class="cta cta_border">Checkout</a>
          </div>

        </div>
      </section>
  `;
  awaitAddToCart();
}
jacketDetailDisplay(url);

// document.querySelector('[data-id="box1"]')
// const productThumbnail = document.querySelector("data-id");
// console.log(productThumbnail);
// let testy = productThumbnail.dataset.id;
// console.log(testy);
// const button = productThumbnail.querySelectorAll(".add-to-cart");
// console.log(button);
// button.addEventlistener("click", () => {
//   console.log(testy);
// });
// button.addEventListener("click", function (event) {
//   const product = {
//     id: productThumbnail.dataset.id,
//   };
//   addToCart(product);
// });
// function addToCart(product) {
//   const cart = loadFromStorage("cart");
//   cart.push(product);
//   saveToStorage("cart", cart);
// }

/* <div class="cta_animation_box">
<label for="cta_animation" class="button" id="addtocart" data-id="">Add to cart</label>
<input id="cta_animation" type="radio" name="showMessage" />
<div class="buttontext">Raincoat added to cart</div>
</div> */
