const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR"
});

export function formatEUR(value) {
  return formatter.format(Number(value || 0));
}
