// Function to get data from API
async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

async function main() {
  const data = await getData();
  //   console.log(data);
  //   Looping over data array

  for (let product of data) {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    const productImage = document.createElement("div");
    productImage.className = "product-image";
    const img = document.createElement("img");
    img.src = product.image;
    productImage.append(img);

    // Adding product-image div inside product-card div
    productCard.append(productImage);

    // Creating title h1
    const productTitle = document.createElement("h1");
    productTitle.className = "product-title";
    productTitle.innerText = product.title;

    //Adding title h1 inside product-card div
    productCard.append(productTitle);

    // Creating product-price h1
    const productPrice = document.createElement("h1");
    productPrice.className = "product-price";

    // Creating final-price span
    const finalPrice = document.createElement("span");
    finalPrice.className = "final-price";
    finalPrice.innerText = "₹" + Math.round(product.price * 0.9 * 85);

    // Creating old-price span
    const oldPrice = document.createElement("span");
    oldPrice.className = "old-price";
    oldPrice.innerText = "₹" + Math.round(product.price * 85);

    // Creating discount span
    const discount = document.createElement("span");
    discount.className = "discount";
    discount.innerText = "10% Off";

    // Adding finalPrice,oldPrice and discount inside productPrice h1
    productPrice.append(finalPrice, oldPrice, discount);

    // Adding product-price inside product-card
    productCard.append(productPrice);

    // Creating product-category div
    const productCategory = document.createElement("div");
    productCategory.className = "product-category";
    productCategory.innerText = product.category;

    // Adding product-category div inside product-card
    productCard.append(productCategory);

    // Creating product-rating div
    const productRating = document.createElement("div");
    productRating.className = "product-rating";
    for (let i = 1; i <= Math.round(product.rating.rate); i++) {
      const star = document.createElement("i");
      star.className = "fa-solid fa-star";
      productRating.append(star);
    }

    // Adding product-rating inside product-card
    productCard.append(productRating);

    // Creating add-to-cart button
    const addToCart = document.createElement("button");
    addToCart.className = "add-to-cart";
    addToCart.innerText = "Add To Cart";

    // Adding add-to-cart button inside product card
    productCard.append(addToCart);
    
    // Selecting product-container
    const productContainer = document.querySelector(".products-container");
    productContainer.append(productCard);
  }
}
main();