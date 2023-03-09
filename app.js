const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    productsDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};
const displayProducts = (list) => {
  console.log(list);
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};
start();
