import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {
  order: Order;
  constructor(private orderService: OrderService) {
    this.order = {
      name: 'zzz',
      address: '',
      cardNumber: '',
      total: 0
    };
   }

  ngOnInit() {
    const orders = this.orderService.getOrders();
    console.log(orders);
    this.order = orders[orders.length - 1];

  }

}
