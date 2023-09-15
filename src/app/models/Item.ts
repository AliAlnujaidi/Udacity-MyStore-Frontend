export class Item {
  id: number;
  name: string;
  price: number;
  description?: string;
  quantity: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.description = '';
    this.quantity = 0;
  }
}
