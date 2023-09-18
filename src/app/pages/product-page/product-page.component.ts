import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  productId: string | null = null;
  products: Product[] = [];
  product: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
    };
  }

  ngOnInit() {
    const id = this.productId ? parseInt(this.productId) : 1;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.product = this.products.find((product) => product.id === id)!;
      },
    });
  }

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
    alert('Product added to cart!');
    this.quantity = 1;
  }
}
