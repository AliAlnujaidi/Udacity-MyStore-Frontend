import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [];
  constructor() {
    this.orders = [];
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }
  getOrders() {
    return this.orders;
  }
}
