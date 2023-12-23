import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  product: any = {};

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    const productId = Number(id); // Convert id to number
    this.product = this.productService.buyOnce(productId);
  }
}
