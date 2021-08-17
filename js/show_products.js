let products = [];
let cart = [];
console.log(cart);

fetch("https://shopping1-app.herokuapp.com/show-products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let products = data.data;
    let productContainer = document.querySelector("#products-container");
    productContainer.innerHTML = "";
    products.forEach((product) => {
      console.log(product);
      productContainer.innerHTML += `
        <div class="product">
        <div class="product-content">
          <h4 class="product-name"> ${product[1]} </h4>
          <p class="product-description">${product[3]}</p>
          <p class="product-type">${product[2]}</p>
          <p class="product-price">R${product[5]}</p>
          <button onclick="addToCart(${product[0]})">Add to Cart</button>
          </div>
        </div>`;
    });
  });

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function addToCart(id) {
  let product = products.find((item) => {
    return item[0] == id;
  });
  console.log(product);
  cart.push(product);
  console.log(cart);
}

function searchForProducts() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);

  let searchedProducts = products.filter((product) =>
    product[1].toLowercase().contains(searchTerm.toLowercase)
  );
  console.log(searchedProducts);

  data(searchedProducts);
}
