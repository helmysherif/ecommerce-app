import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { Subject, takeUntil } from 'rxjs';
import { ProductItemComponent } from "../../components/product-item/product-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products!:Product[];
  private endSubs$:Subject<any> = new Subject();
  constructor(
    private productService:ProductsService
  ){}
  ngOnDestroy()
  {
    this.endSubs$.complete();
  }
  ngOnInit()
  {
    this.productService.getAllProducts().pipe(takeUntil(this.endSubs$)).subscribe({
      next : (allProducts:Product[]) => {
        console.log(allProducts);
        this.products = allProducts;
      }
    })
  }
}
