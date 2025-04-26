document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");

  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "product";

    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} ريال</p>
      <button onclick="addToCart('${product.name}')">أضف إلى السلة</button>
    `;

    container.appendChild(box);
  });
});

function addToCart(productName) {
  alert(`تمت إضافة ${productName} إلى السلة`);
}
