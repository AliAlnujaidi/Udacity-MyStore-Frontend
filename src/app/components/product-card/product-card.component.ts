import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
    };
  }

  ngOnInit(): void {}

  addQuantity() {
    this.quantity++;
  }
  subtractQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  onAddToCart(product: Product) {
    const cartProduct: Cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      url: product.url,
      quantity: this.quantity,
    };
    this.cartService.addToCart(cartProduct);
    this.quantity = 1;
  }
}
