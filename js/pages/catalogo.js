import { renderProductCards } from "../components/product-card.js";

export function initCatalog(products) {
  const category = document.getElementById("filter-category");
  const size = document.getElementById("filter-size");
  const grid = document.getElementById("products-grid");

  function applyFilters() {
    const byCategory = category.value;
    const bySize = size.value;

    const filtered = products.filter((item) => {
      const okCategory = byCategory === "all" || item.category === byCategory;
      const okSize = bySize === "all" || item.sizes.includes(bySize);
      return okCategory && okSize;
    });

    renderProductCards(filtered, grid);
  }

  category?.addEventListener("change", applyFilters);
  size?.addEventListener("change", applyFilters);
  applyFilters();
}
