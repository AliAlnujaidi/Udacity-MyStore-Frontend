import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [
    {
      name: 'Ali',
      address: '1234',
      cardNumber: '1234',
      total: 100,
    },
    {
      name: 'Ali',
      address: '1234',
      cardNumber: '1234',
      total: 100,
    },
    {
      name: 'Ali',
      address: '1234',
      cardNumber: '1234',
      total: 100,
    },
  ];
  constructor() {
    this.orders = [];
  }

  addOrder(order: Order) {
    this.orders.push(order);
    console.log(this.orders);
  }
  getOrders() {
    console.log(this.orders);
    return this.orders;
  }
}