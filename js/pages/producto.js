import { addToCart } from "../state/cart.state.js";

export function initProduct(products) {
  const button = document.querySelector(".js-add-to-cart");
  const qty = document.getElementById("quantity-input");
  if (!button || products.length === 0) return;

  button.addEventListener("click", () => {
    addToCart(products[0], Number(qty?.value || 1));
    button.textContent = "Agregado";
  });
}
