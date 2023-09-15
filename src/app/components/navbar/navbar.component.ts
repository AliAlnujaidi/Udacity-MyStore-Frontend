import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'My Store';
  items: string[] = [];
  constructor() { }

  ngOnInit() {
    this.items = ['Home', 'Items', 'About', 'Contact'];
  }

}
