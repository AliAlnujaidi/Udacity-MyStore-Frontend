import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import products from 'src/assets/data.json';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] ;
  constructor(private http: HttpClient) {
    this.products = products;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json').pipe();
  }

  getProductById(id: number): Product {
    this.products.forEach((product) => {
      if (product.id === id) {
        return product;
      }else {
        return null;
      }
    }
    );
    return products[0]

  }

}
