export function renderNavbar(root) {
  if (!root) return;
  root.innerHTML = `
    <nav class="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm md:p-4" aria-label="Navegación principal">
      <div class="grid gap-3 md:grid-cols-[auto_1fr_auto] md:items-center">
        <a class="font-serif text-2xl tracking-[0.12em] text-stone-900" href="index.html">MAISON MODE</a>
        <div class="relative">
          <label class="sr-only" for="nav-search">Buscar productos</label>
          <input
            id="nav-search"
            type="search"
            placeholder="Buscar prendas"
            aria-label="Buscar prendas"
            class="w-full rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm text-stone-800 outline-none ring-emerald-700 transition focus-visible:ring-2"
          />
        </div>
        <div class="flex items-center gap-4 text-sm font-semibold text-stone-700">
          <a class="hover:text-emerald-700" href="catalogo.html">Catálogo</a>
          <a class="hover:text-emerald-700" href="carrito.html">Carrito</a>
        </div>
      </div>
    </nav>
  `;
}
