import { Component, input, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  id = input<string>();
  private endSubs$:Subject<any> = new Subject();
  productDetails!:Product;
  constructor(
    private productServices:ProductsService
  ){}
  ngOnDestroy()
  {
    this.endSubs$.complete();
  }
  ngOnInit()
  {
    if(this.id() && this.id() !== undefined)
    {
      this.productServices.getProductDetails(Number(this.id())).pipe(takeUntil(this.endSubs$)).subscribe(
        {
          next : (details:Product) => {
            this.productDetails = details;
          }
        }
      )
    }
  }
}
