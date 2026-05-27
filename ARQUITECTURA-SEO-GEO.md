# Requisitos Tecnicos Avanzados Implementados

## SEO Tecnico
- HTML semantico aplicado en las 5 vistas con `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Jerarquia de headings corregida: 1 `h1` por vista y uso progresivo de `h2` y `h3`.
- Meta title y meta description por pagina.
- Open Graph y Twitter Cards en cada vista para compartir enlaces.
- Canonical URL en cada pagina.
- Enlazado interno entre Home, Catalogo, Producto, Carrito y Checkout.
- Sitemap conceptual en `sitemap.xml` y robots conceptual en `robots.txt`.

## GEO (Generative Engine Optimization)
- Contenido segmentado por secciones claras y encabezados descriptivos.
- FAQs semanticas con elementos `details/summary` para mejorar interpretacion de LLMs.
- Textos directos, contextuales y no ambiguos para favorecer resumenes por motores generativos.

## Schema.org Implementado
- `Organization` y `WebSite` + `SearchAction` en Home.
- `BreadcrumbList` en Catalogo, Producto, Carrito y Checkout.
- `Product` + `Offer` en vista de producto.

Donde se implementa:
- En `script type="application/ld+json"` dentro del `<head>` de cada vista.

Por que mejora SEO:
- Facilita a Google comprender entidad, intencion y contexto de cada pagina.

Como ayuda a motores IA:
- Proporciona estructura semantica explicita para extraer hechos clave (producto, oferta, rutas de navegacion y organizacion).

## Mobile First
- Layout base en movil y escalado progresivo a tablet y desktop con utilidades responsivas de Tailwind (`md:`, `lg:`, `xl:`).
- Breakpoints usados:
  - `md` (>=768px)
  - `lg` (>=1024px)
  - `xl` (>=1280px)
- Se usan media queries solo para cambios de composicion mayores (grid, columnas, sticky aside).

## TailwindCSS v4
- Tailwind v4 se aplica como sistema principal de estilos por CDN.
- Patrón utility-first en layout, spacing, tipografia, color, estados hover/focus y responsive.
- Los estilos no ideales para utilidades (keyframes y overlays decorativos) se aislan en `css/custom-effects.css`.

## Performance y Core Web Vitals
- LCP: imagen hero con `fetchpriority="high"` y dimensiones definidas.
- CLS: ancho/alto declarados en imagenes para evitar saltos de layout.
- INP: estados focus/hover claros y controles de formulario ligeros.
- Lazy loading aplicado a imagenes de cards y carrito.
- Uso de `decoding="async"` en imagenes no criticas.

## Accesibilidad (a11y)
- Skip link para acceso rapido al contenido principal.
- `aria-label` y `aria-current` en navegacion y breadcrumbs.
- Labels conectados a campos (`for/id`) en todos los formularios.
- Contraste visual y focus states visibles.
- Controles nativos (`button`, `input`, `select`) mantenidos.

## Arquitectura Frontend y DRY
- Vistas separadas: `index.html`, `catalogo.html`, `producto.html`, `carrito.html`, `checkout.html`.
- Componentes reutilizables por JS:
  - `js/components/navbar.js`
  - `js/components/footer.js`
  - `js/components/product-card.js`
- Estado de carrito centralizado en `js/state/cart.state.js` con LocalStorage.
- Datos mock en `data/products.json`.

## Resultado esperado
- Prototipo visualmente profesional, con flujo completo de compra.
- Base tecnica alineada con estandares modernos para evolucionar a produccion.
