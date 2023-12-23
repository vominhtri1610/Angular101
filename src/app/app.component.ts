import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'day2';

  products: Product[] = [
    { id: 1, name: 'product 1', unitPrice: 510, quantity: 2 },
    { id: 2, name: 'product 2', unitPrice: 430, quantity: 5 },
    { id: 3, name: 'product 3', unitPrice: 960, quantity: 1 },
    { id: 4, name: 'product 4', unitPrice: 350, quantity: 3 },
    { id: 5, name: 'product 5555', unitPrice: 100, quantity: 4 },
  ];

  handleBuyProduct(product: Product) {
    if (product.quantity > 0) {
      product.quantity++;
    }
  }
}
