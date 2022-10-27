const plainUrl = `https://api.dd2.no/wp-json/wc/v3/products`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}?consumer_key=${key}&consumer_secret=${secret}`;
console.log(url);

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function (product) {
    console.log(product.name);
    console.log(product.id);
    console.log(product.description);
    console.log(product.price);
    console.log(product.images[0].src);
  });
}
getProducts(url);

export let jackets = [
  {
    id: "100001",
    name: "Jacket 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "699.99",
    image: "/images/jacket1yellow.jpg",
    popular: "true",
    onsale: "true",
  },
  {
    id: "100002",
    name: "Jacket 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "599",
    image: "/images/jacket2red.jpg",
  },
  {
    id: "100003",
    name: "Jacket 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "799.90",
    image: "/images/jacket3green.jpg",
    popular: "true",
  },
  {
    id: "100004",
    name: "Jacket 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "899.99",
    image: "/images/jacket4black.jpg",
  },
  {
    id: "100005",
    name: "Jacket 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "1199.90",
    image: "/images/jacket5.jpg",
    popular: "true",
  },
  {
    id: "100006",
    name: "Jacket 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "749.90",
    image: "/images/jacket6.jpg",
  },
  {
    id: "100007",
    name: "Jacket 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "849.49",
    image: "/images/jacket7.jpg",
  },
  {
    id: "100008",
    name: "Jacket 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tincidunt non cursus id fusce.",
    price: "499.99",
    image: "/images/jacket8.jpg",
  },
];
