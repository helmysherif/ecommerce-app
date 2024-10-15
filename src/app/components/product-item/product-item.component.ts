import { Component, input, InputSignal } from '@angular/core';
import { Product } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  productItem:InputSignal<Product> = input.required<Product>();
}
