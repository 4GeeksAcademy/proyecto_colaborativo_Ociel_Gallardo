import { formatEUR } from "../core/currency.js";
import { getCart, seedCartIfEmpty, totals } from "../state/cart.state.js";

export function initCart(products) {
  seedCartIfEmpty(products);

  const itemsRoot = document.getElementById("cart-items");
  const subtotalNode = document.getElementById("cart-subtotal");
  const taxNode = document.getElementById("cart-tax");
  const totalNode = document.getElementById("cart-total");

  const items = getCart();
  if (!itemsRoot) return;

  itemsRoot.innerHTML = items
    .map(
      (item) => `
      <article class="grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
        <img
          class="h-20 w-20 rounded-xl object-cover"
          src="https://picsum.photos/seed/cart-${item.id}/320/320"
          alt="Miniatura de ${item.name}"
          width="320"
          height="320"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 class="font-serif text-xl text-stone-900">${item.name}</h3>
          <p class="text-xs text-stone-600 md:text-sm">Precio unitario: ${formatEUR(item.price)}</p>
          <p class="text-xs text-stone-600 md:text-sm">Cantidad: ${item.quantity}</p>
        </div>
        <p class="text-sm font-semibold text-emerald-700 md:text-base">${formatEUR(item.quantity * item.price)}</p>
      </article>
    `
    )
    .join("");

  const summary = totals();
  subtotalNode.textContent = formatEUR(summary.subtotal);
  taxNode.textContent = formatEUR(summary.tax);
  totalNode.textContent = formatEUR(summary.total);
}
