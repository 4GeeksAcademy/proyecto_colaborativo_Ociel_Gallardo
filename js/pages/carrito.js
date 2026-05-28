import { formatEUR } from "../core/currency.js";
import { getCart, seedCartIfEmpty, totals } from "../state/cart.state.js";
import { removeFromCart } from "../state/cart.state.js";

// Función para eliminar artículo y recargar el carrito
function eliminarArticuloDelCarrito(id, nombreProducto) {
  const confirmarEliminacion = window.confirm(
    `¿Estás seguro de que deseas cancelar la compra de "${nombreProducto}"?`
  );

  if (!confirmarEliminacion) return;

  removeFromCart(id);
  // Recargar productos (puedes optimizar si tienes los productos en contexto)
  const productos = window.__PRODUCTOS__ || [];
  initCart(productos);
}

export function initCart(products) {
  seedCartIfEmpty(products);

  const itemsRoot = document.getElementById("cart-items");
  const subtotalNode = document.getElementById("cart-subtotal");
  const taxNode = document.getElementById("cart-tax");
  const totalNode = document.getElementById("cart-total");
  const buyButton = document.querySelector('a[href="checkout.html"]');

  const items = getCart();
  if (!itemsRoot) return;

  if (buyButton && !buyButton.dataset.emptyCartValidation) {
    buyButton.addEventListener("click", (event) => {
      if (getCart().length > 0) return;
      event.preventDefault();
      window.alert("Por favor seleccione 1 producto a comprar");
    });
    buyButton.dataset.emptyCartValidation = "true";
  }

  itemsRoot.innerHTML = items
    .map(
      (item) => `
      <article class="relative grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
        <button aria-label="Eliminar artículo" class="absolute right-2 top-2 text-stone-400 hover:text-red-500 transition-colors delete-item-btn" data-id="${item.id}">
          &times;
        </button>
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

  // Lógica para eliminar artículo
  itemsRoot.querySelectorAll('.delete-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = items.find((product) => String(product.id) === String(id));
      const nombreProducto = item?.name || "este producto";
      eliminarArticuloDelCarrito(id, nombreProducto);
    });
  });

  const summary = totals();
  subtotalNode.textContent = formatEUR(summary.subtotal);
  taxNode.textContent = formatEUR(summary.tax);
  totalNode.textContent = formatEUR(summary.total);
}
