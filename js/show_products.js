fetch("https://shopping1-app.herokuapp.com/show-products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let productContainer = document.querySelector("#products-container");
    productContainer.innerHTML = "";
    data["data"].forEach((product) => {
      console.log(product);
      productContainer.innerHTML += `
        <div class="product">
        <h4 class="product-name"> ${product[1]} </h4>
        <p class="product-description">${product[3]}</p>
        <p class="product-type">${product[2]}</p>
        <p class="product-price">${product[5]}</p>
        </div>`;
    });
  });

// let prod_url = "https://abdul-malik-api.herokuapp.com/api/show-products/";

// function showProducts(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       let products = data.data;

//       let show = document.querySelector(".show_products");

//       products.forEach((product) => {
//         console.log(product);
//         show.innerHTML += `
//         <div class="prod_container">
//         <img src="${product.Picture}" alt="">
//         <h1 class="name"> <span class="prod_numb">${product.prod_list}.</span> ${product.Name}</h1>
//         <h2 class="type">${product.Type}</h2>
//         <p class="description" >${product.Description}</p>
//         <h3 class="price">${product.Price}</h3>
//         </div>`;
//       });
//     });
// }

// showProducts(prod_url);
