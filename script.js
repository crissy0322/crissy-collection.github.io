const products = [
  { name: "T-Shirt", price: 10, image: "path/to/image.jpg" },
  { name: "Mug", price: 5, image: "path/to/image2.jpg" },
  // Add more products here
];

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button data-id="${product.name}">Add to Cart</button>
  `;
  document.getElementById("product-container").appendChild(productElement);
});

document.getElementById("product-container").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productId = event.target.dataset.id;
    const product = products.find((product) => product.name === productId);
    alert(`Added ${product.name} (Qty: 1) to cart!`); // Simulate adding to cart
  }
});

document.getElementById("product-container").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productId = event.target.dataset.id;
    const product = products.find((product) => product.name === productId);

    // Simulate adding to cart (server-side would handle this)
    alert(`Added ${product.name} (Qty: 1) to cart!`);

    // Update cart icon (replace with your cart icon element selection)
    const cartIcon = document.getElementById("cart-icon");
    let currentQuantity = parseInt(cartIcon.textContent) || 0; // Handle initial empty cart
    cartIcon.textContent = currentQuantity + 1;
  }
});
