import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(
    private http: HttpClient,
  ) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://jsonplaceholder.typicode.com/items');
  }
}

/*
[
      {
        id: 0,
        name: 'Shampoo',
        price: 18,
        description: 'This is a shampoo',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Conditioner',
        price: 15,
        description: 'This is a conditioner',
        quantity: 0,
      },
      {
        id: 2,
        name: 'Soap',
        price: 5,
        description: 'This is a soap',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Toothpaste',
        price: 8,
        description: 'This is a toothpaste',
        quantity: 0,
      },
      {
        id: 4,
        name: 'Toothbrush',
        price: 3,
        description: 'This is a toothbrush',
        quantity: 0,
      },
    ];
*/
