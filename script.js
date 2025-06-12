const products = [
  {
    id: 1,
    name: "Old Money Jacket",
    price: 1299.99,
    image: "images/OLD.jpg"
  },
  {
    id: 2,
    name: "Wedding Party Wear",
    price: 598.99,
    image: "images/WWED.jpg"
  },
  {
    id: 3,
    name: "Sleeveless OFFWhite",
    price: 639.99,
    image: "images/shirt.jpg"
  },
  {
    id: 4,
    name: "Party Wear RED",
    price: 499.99,
    image: "images/PW.jpg"
  },
  {
    id: 5,
    name: "Black Linen",
    price: 699.99,
    image: "images/blacklinen.jpg"
  }
];

function renderProducts() {
  const container = document.getElementById("product-list");

  // Show only first 5 products
  const visibleProducts = products.slice(0, 5);

  visibleProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h2>${p.name}</h2>
      <p>${p.price.toFixed(2)}INR</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

let cart = [];

function addToCart(productId) {
  cart.push(productId);
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();