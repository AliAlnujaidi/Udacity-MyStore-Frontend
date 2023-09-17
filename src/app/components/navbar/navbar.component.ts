import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'My Store';
  items: string[] = [];
  cartCount: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = ['Home', 'Items', 'About', 'Contact'];
    this.cartCount = this.cartService.getCartCount();
  }
}
