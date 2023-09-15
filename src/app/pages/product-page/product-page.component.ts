import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
