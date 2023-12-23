import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input({
    alias: 'sanpham',
    transform: (value: any) => {
      return {
        ...value,
        total: value.unitPrice * value.quantity,
      };
    },
    required: true,
  })
  product!: any;

  @Output() buyProduct = new EventEmitter<Product>();
  buy() {
    this.buyProduct.emit(this.product);
  }
}
