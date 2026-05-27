import { formatEUR } from "../core/currency.js";

export function renderProductCards(products, root) {
  if (!root) return;
  root.innerHTML = products
    .map(
      (product) => `
      <article class="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <img
          src="${product.image}"
          alt="${product.alt}"
          width="640"
          height="800"
          loading="lazy"
          decoding="async"
          class="h-48 w-full object-cover"
        />
        <div class="grid gap-2 p-4">
          <h3 class="line-clamp-2 font-serif text-xl text-stone-900">${product.name}</h3>
          <p class="text-sm font-semibold text-emerald-700">${formatEUR(product.price)}</p>
          <a
            class="inline-flex w-fit items-center rounded-full border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-800 transition hover:border-emerald-700 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            href="producto.html?id=${product.id}"
            aria-label="Ver detalle de ${product.name}"
            >Ver producto</a
          >
        </div>
      </article>
    `
    )
    .join("");
}
