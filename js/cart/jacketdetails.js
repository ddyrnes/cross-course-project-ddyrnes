import { jackets } from "./jacketsarray.js";

const selectContainer = document.querySelector(".main_product_name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");
let id = jackets.find((item) => item.id === jacketId);

export function jacketDetailDisplay() {
  selectContainer.innerHTML = `
  <section class="product_name_specific">
        <figure class="product_name_picture">
          <img src="${id.image}" alt="{id.name}" />
          <p class="product_name_p">${id.name}</p>
        </figure>
        <div class="product_name_details">
          <form method="get">
            <h1 class="product_name_h1">${id.name}</h1>
            <p class="product_name_p">${id.price} NOK</p>
            <div class="radio_parent">
              <h2 class="product_name_h2">Select a color</h2>
              <div class="color_radio">
                <input type="radio" id="radioYellow" name="radioColor" value="Yellow" />
                <label for="radioYellow">Yellow</label>
                <input type="radio" id="radioBlue" name="radioColor" value="Blue" />
                <label for="radioBlue">Blue</label>
                <input type="radio" id="radioRed" name="radioColor" value="Red" />
                <label for="radioRed">Red</label>
                <input type="radio" id="radioBlack" name="radioColor" value="Black" />
                <label for="radioBlack">Black</label>
              </div>
            </div>
            <div class="radio_parent">
              <h2 class="product_name_h2">Size</h2>
              <div class="size_radio">
                <input type="radio" id="radioSmall" name="radiosize" value="Small" />
                <label for="radioSmall">Small</label>
                <input type="radio" id="radioMedium" name="radiosize" value="Medium" />
                <label for="radioMedium">Medium</label>
                <input type="radio" id="radioLarge" name="radiosize" value="Large" />
                <label for="radioLarge">Large</label>
              </div>
            </div>
            <div class="radio_parent">
              <h2 class="product_name_h2">Quantity</h2>
              <label for="quantity"></label>
              <input type="number" id="quantity" name="quantity" value="1" min="1" max="999" />
            </div>
            </form>
            <div>
              <button class="cta" id="add-to-cart" data-id="${id.id}">Add to cart</button>
              <a href="products.html" class="cta cta_border">Continue Shopping</a>
              <a href="checkout.html" class="cta cta_border">Checkout</a>
            </div>

        </div>
      </section>
  `;
}
jacketDetailDisplay();

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
