export function renderFooter(root) {
  if (!root) return;
  root.innerHTML = `
    <section class="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm md:p-6" aria-label="Pie de página">
      <div class="grid gap-5 md:grid-cols-3">
        <div>
          <h2 class="font-serif text-2xl">Categorías</h2>
          <ul class="mt-2 space-y-1 text-sm text-stone-700">
            <li><a class="hover:text-emerald-700" href="catalogo.html">Calzado</a></li>
            <li><a class="hover:text-emerald-700" href="catalogo.html">Camisas</a></li>
            <li><a class="hover:text-emerald-700" href="catalogo.html">Pantalones</a></li>
            <li><a class="hover:text-emerald-700" href="catalogo.html">Accesorios</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-serif text-2xl">Legal</h2>
          <ul class="mt-2 space-y-1 text-sm text-stone-700">
            <li><a class="hover:text-emerald-700" href="#">Términos y condiciones</a></li>
            <li><a class="hover:text-emerald-700" href="#">Política de privacidad</a></li>
            <li><a class="hover:text-emerald-700" href="#">Sobre la marca</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-serif text-2xl">Contacto</h2>
          <p class="mt-2 text-sm text-stone-700">Rue du Commerce 12, Paris</p>
          <p class="text-sm text-stone-700">support@maisonmode.fr</p>
        </div>
      </div>
    </section>
  `;
}
