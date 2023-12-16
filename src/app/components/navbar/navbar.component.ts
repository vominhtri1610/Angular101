import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  urlImg = 'https://picsum.photos/200/300';

  products = {
    id: 1,
    name: 'Product 1',
  };
}
