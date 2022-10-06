import { jackets } from "./jacketsarray.js";
const selectContainer = document.querySelector(".jacket_container_1");

export function jacketsDisplay() {
  for (let i = 0; i < jackets.length; i++) {
    selectContainer.innerHTML += `
    <a href="/product-name.html?id=${jackets[i].id}" class="jacket_a">
    <div class="jacket">
      <figure class="jacket_top">
        <img class="jacket_img" src="${jackets[i].image}" alt="${jackets[i].name}" />
      </figure>
      <p class="jacket_middle">${jackets[i].name}</p>
      <div class="jacket_bottom">
        <p class="jacket_price">${jackets[i].price}</p>
        <div class="cta cta_small">View</div>
      </div>
    </div>
  </a>
`;
  }
}
jacketsDisplay();
