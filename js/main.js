import { getProducts } from "./core/api.js";
import { renderFooter } from "./components/footer.js";
import { renderNavbar } from "./components/navbar.js";
import { initCart } from "./pages/carrito.js";
import { initCatalog } from "./pages/catalogo.js";
import { initCheckout } from "./pages/checkout.js";
import { initHome } from "./pages/home.js";
import { initProduct } from "./pages/producto.js";

async function bootstrap() {
  renderNavbar(document.getElementById("navbar-root"));
  renderFooter(document.getElementById("footer-root"));

  const page = document.body.dataset.page;

  if (page === "checkout") {
    initCheckout();
    return;
  }

  if (page === "home" || page === "catalogo" || page === "producto" || page === "carrito") {
    const products = await getProducts();
    if (page === "home") initHome(products);
    if (page === "catalogo") initCatalog(products);
    if (page === "producto") initProduct(products);
    if (page === "carrito") initCart(products);
  }
}

bootstrap().catch((error) => {
  console.error(error);
});
