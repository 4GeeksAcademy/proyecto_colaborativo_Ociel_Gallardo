export function initCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    if (button) button.textContent = "Pedido confirmado";
  });
}
