import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product: Cart) {
    this.cart.push(product);
    alert('Product added to cart!');
  }

  calculateTotal() {
    let total = 0;
    this.cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }

  removeFromCart(product: Cart) {
    const index = this.cart.indexOf(product);
    this.cart.splice(index, 1);
  }
  getCartCount() {
    return this.cart.length;
  }

  clearCart() {
    this.cart = [];
  }
}
