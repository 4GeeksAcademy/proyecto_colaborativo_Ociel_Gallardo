// Elimina un artículo del carrito por id
export function removeFromCart(id) {
  const idx = cart.findIndex(item => String(item.id) === String(id));
  if (idx !== -1) {
    cart.splice(idx, 1);
    persist();
  }
}
import { storage } from "../core/storage.js";

const STORAGE_KEY = "cart";
const TAX_RATE = 0.2;

let cart = storage.get(STORAGE_KEY, []);

function persist() {
  storage.set(STORAGE_KEY, cart);
}

export function getCart() {
  return [...cart];
}

export function seedCartIfEmpty(products) {
  if (cart.length > 0 || products.length < 3) return;
  cart = [
    {
      id: products[0].id,
      name: products[0].name,
      price: products[0].price,
      image: products[0].image,
      quantity: 1
    },
    {
      id: products[1].id,
      name: products[1].name,
      price: products[1].price,
      image: products[1].image,
      quantity: 2
    },
    {
      id: products[2].id,
      name: products[2].name,
      price: products[2].price,
      image: products[2].image,
      quantity: 1
    }
  ];
  persist();
}

export function addToCart(product, quantity = 1) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
    if (!existing.image && product.image) {
      existing.image = product.image;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  }
  persist();
}

export function totals() {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  return { subtotal, tax, total: subtotal + tax };
}
