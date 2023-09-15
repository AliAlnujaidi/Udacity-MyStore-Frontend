import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: Item;
  @Output() hideItem: EventEmitter<Item> = new EventEmitter;

  constructor() {
    this.item = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      quantity: 0,
    };
  }

  ngOnInit(): void {}

  onClick(item: Item) {
    console.log(item);
  }
  addQuantity(item: Item) {
    item.quantity++;
  }
  subtractQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
  hideItemFromList(item: Item) {
    console.log(this.hideItem.emit(item));
  }
}
