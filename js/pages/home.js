import { renderProductCards } from "../components/product-card.js";

export function initHome(products) {
  renderProductCards(products.slice(0, 8), document.getElementById("new-arrivals-list"));
  renderProductCards(products.slice(8, 16), document.getElementById("best-sellers-list"));
}
