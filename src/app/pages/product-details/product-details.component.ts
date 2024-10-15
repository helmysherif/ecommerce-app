import { Component, inject, input, Input, signal, WritableSignal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent , CommonModule , NgxSpinnerModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  id = input<string>();
  private endSubs$:Subject<any> = new Subject();
  spinnerService = inject(NgxSpinnerService);
  productDetails:WritableSignal<Product> = signal<Product>({} as Product);
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
      this.spinnerService.show();
      this.productServices.getProductDetails(Number(this.id())).pipe(takeUntil(this.endSubs$)).subscribe(
        {
          next : (details:Product) => {
            this.spinnerService.hide();
            this.productDetails.set(details);
          }
        }
      )
    }
  }
}
