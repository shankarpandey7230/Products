// (Course API)[https://course-api.com/]

// (Products)[https://course-api.com/javascript-store-products]

// (Single Product)[https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog]

const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};

const displayProduct = (product) => {
  console.log(product);
  // company, colors , description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();
  //colors
  productDOM.innerHTML = ` <div class="product-wrapper">
  <img src="${img}" class="img" alt="${title}" />
  <div class="product-info">
    <h3>${title}</h3>
    <h5>${company}</h5>
    <span>$${price / 100}</span>
    <div class="colors">
      <span class="product-color"></span>
      <span class="product-color" style="background: red"></span>
    </div>
    <p>
     ${description}
    </p>
    <button class="btn">add to cart</button>
  </div>
</div>`;
};
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
