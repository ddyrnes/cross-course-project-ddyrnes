import { jackets } from "./jacketsarray.js";

const selectContainer = document.querySelector(".main_product_name");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacketId = params.get("id");
let id = jackets.find((item) => item.id === jacketId);
console.log(id);

export function jacketDetailDisplay() {
  selectContainer.innerHTML = `
  <section class="product_name_specific">
        <figure class="product_name_picture">
          <img src="${id.image}" alt="Yellow Raincoat" />
          <p class="product_name_p">${id.name}</p>
        </figure>
        <div class="product_name_details">
          <form action="/checkout.html" method="get">
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
            <div class="cta_animation_box">
              <label for="cta_animation" class="button">Add to cart</label>
              <input id="cta_animation" type="radio" name="showMessage" />
              <div class="buttontext">Raincoat added to cart</div>
            </div>
            <div>
              <a href="products.html" class="cta cta_border">Continue Shopping</a>
              <input type="submit" value="Checkout" class="cta cta_border" />
            </div>
          </form>
        </div>
      </section>
  `;
}
jacketDetailDisplay();
