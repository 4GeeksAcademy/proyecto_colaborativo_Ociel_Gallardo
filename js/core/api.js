export async function getProducts() {
  const response = await fetch("./data/products.json");
  if (!response.ok) {
    throw new Error("No se pudo cargar products.json");
  }
  return response.json();
}
