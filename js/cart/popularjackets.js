// import { jackets } from "./jacketsarray.js";
const selectContainer = document.querySelector(".jacket_container_1");

const plainUrl = `https://api.dd2.no/wp-json/wc/v3/products`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}?consumer_key=${key}&consumer_secret=${secret}`;

// export function popularJackets() {
//   for (let i = 0; i < jackets.length; i++) {
//     if (jackets[i].popular) {
//       selectContainer.innerHTML += `
//       <a href="/product-name.html?id=${jackets[i].id}" class="jacket_a">
//       <div class="jacket">
//         <figure class="jacket_top">
//           <img class="jacket_img" src="${jackets[i].image}" alt="${jackets[i].name}" />
//         </figure>
//         <p class="jacket_middle">${jackets[i].name}</p>
//         <div class="jacket_bottom">
//           <p class="jacket_price">${jackets[i].price} NOK</p>
//           <div class="cta cta_small">View</div>
//         </div>
//       </div>
//     </a>
//   `;
//     } else {
//       continue;
//     }
//   }
// }
// popularJackets();
export async function popularJackets(url) {
  const response = await fetch(url);
  const products = await response.json();
  for (let i = 0; i < products.length; i++) {
    if (products[i].featured) {
      selectContainer.innerHTML += `
    <a href="/product-name.html?id=${products[i].id}" class="jacket_a">
    <div class="jacket">
      <figure class="jacket_top">
        <img class="jacket_img" src="${products[i].images[0].src}" alt="${products[i].name}" />
      </figure>
      <p class="jacket_middle">${products[i].name}</p>
      <div class="jacket_bottom">
        <p class="jacket_price">${products[i].price}</p>
        <div class="cta cta_small">View</div>
      </div>
    </div>
  </a>
`;
    } else {
      continue;
    }
  }
}
popularJackets(url);
