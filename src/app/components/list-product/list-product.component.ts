import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(private productService: ProductService) {}

  products: any;

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  handleBuyProduct(product: Product) {
    alert(`You bought ${product.name}`);
  }

  handleDeleteProduct(product: Product) {
    this.productService.deleteOnce(product.id);
    this.products = this.productService.getProducts();
  }
}
