import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path : "",
    redirectTo : "products",
    pathMatch : "full"
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "products/:id",
    component : ProductDetailsComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  },
];
