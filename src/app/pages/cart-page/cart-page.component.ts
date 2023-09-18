import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart: Cart[] = [];
  total: number = 0;
  name: string = '';
  address: string = '';
  cardNumber!: number;
  nameError: boolean = false;
  addressError: boolean = false;
  cardNumberError: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  removeFromCart(product: Cart) {
    this.cartService.removeFromCart(product);
    this.total = this.cartService.calculateTotal();
    alert(`${product.name} Product removed from cart`);
  }
  onCardNumberChange(value: string) {
    if (value.length < 16) {
      this.cardNumberError = true;
      return;
    }
    this.cardNumberError = false;
  }
  onNameChange(value: string) {
    if (value.length < 6) {
      this.nameError = true;
      return;
    }
    this.nameError = false;
  }
  onAddressChange(value: string) {
    if (value.length < 6) {
      this.addressError = true;
      return;
    }
    this.addressError = false;
  }

  onCheckout() {
    const order = {
      name: this.name,
      address: this.address,
      cardNumber: this.cardNumber,
      total: this.total,
    };

    this.orderService.addOrder(order);
    this.cartService.clearCart();
    this.cart = [];
    this.total = this.cartService.calculateTotal();
    this.router.navigate(['/order-success']);
  }
}
