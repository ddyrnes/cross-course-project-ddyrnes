import { jackets } from "./jacketsarray.js";

// const getCart = localStorage.getItem([1]);
// console.log(getCart);
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}
