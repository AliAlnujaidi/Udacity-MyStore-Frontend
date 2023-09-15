import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  hideItem(item: Item) {
    console.log(item);
    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
