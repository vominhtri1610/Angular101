import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  products = [
    { id: 1, name: 'product 1', unitPrice: '510.000', quantity: 2 },
    { id: 2, name: 'product 2', unitPrice: '430.000', quantity: 5 },
    { id: 3, name: 'product 3', unitPrice: '960.000', quantity: 1 },
    { id: 4, name: 'product 4', unitPrice: '350.000', quantity: 3 },
    { id: 5, name: 'product 5', unitPrice: '100.000', quantity: 4 },
  ];

  convertToNumber(value: string): number {
    return parseFloat(value);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
