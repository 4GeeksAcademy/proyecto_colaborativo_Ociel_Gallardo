import { addToCart } from "../state/cart.state.js";

export function initProduct(products) {
  const button = document.querySelector(".js-add-to-cart");
  const qty = document.getElementById("quantity-input");
  const nameEl = document.getElementById("product-name");
  const refEl = document.getElementById("product-ref");
  const priceEl = document.getElementById("product-price");
  const imageEl = document.getElementById("product-image");
  const sizeSelect = document.getElementById("size-select");
  if (!button || products.length === 0) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = Number(params.get("id"));
  const hasValidId = Number.isInteger(requestedId) && requestedId > 0;
  const selectedProduct = hasValidId
    ? products.find((item) => item.id === requestedId)
    : products[0];

  const product = selectedProduct || products[0];

  if (nameEl) nameEl.textContent = product.name;
  if (refEl) refEl.textContent = `Ref: MMP-2026-${String(product.id).padStart(3, "0")}`;
  if (priceEl) priceEl.textContent = `${product.price.toFixed(2).replace(".", ",")} EUR`;
  if (imageEl) {
    imageEl.src = product.image;
    imageEl.alt = product.alt;
  }
  if (sizeSelect) {
    sizeSelect.innerHTML = product.sizes
      .map((size) => `<option value="${size}">${size}</option>`)
      .join("");
  }

  document.title = `${product.name} | Maison Mode Paris`;

  button.addEventListener("click", () => {
    addToCart(product, Number(qty?.value || 1));
    button.textContent = "Agregado";
  });
}
