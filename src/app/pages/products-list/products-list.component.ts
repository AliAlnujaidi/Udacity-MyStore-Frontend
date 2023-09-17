import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';
import products from "src/assets/data.json" 

@Component({
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: Product[] = products;

  constructor(private producstService: ProductsService) { }

  ngOnInit(): void {
    this.producstService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onCartAlert(product: Cart) {
    alert(`Product ${product.name} added to cart with a quantity of ${product.quantity}`);
  }
}
