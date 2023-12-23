import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    { id: 1, name: 'product 1', unitPrice: 510, quantity: 2 },
    { id: 2, name: 'product 2', unitPrice: 430, quantity: 5 },
    { id: 3, name: 'product 3', unitPrice: 960, quantity: 1 },
    { id: 4, name: 'product 4', unitPrice: 350, quantity: 3 },
    { id: 5, name: 'product 5555', unitPrice: 100, quantity: 4 },
  ];

  getProducts() {
    return this.products;
  }

  buyOnce(id: number) {
    return this.products.find((product) => product.id === id);
  }

  deleteOnce(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
