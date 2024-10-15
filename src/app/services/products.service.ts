import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http:HttpClient
  ){}
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }
  getProductDetails(productId:number):Observable<Product>
  {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${productId}`);
  }
}
