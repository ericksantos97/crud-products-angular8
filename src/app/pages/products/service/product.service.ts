import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product, number> {

  constructor(public injector: Injector) {
    super(injector, '/products');
  }

  public getAllProducts(): Observable<Product[]> {
    return this.findAll();
  }

  public getProductById(productId: number): Observable<Product> {
    return this.findOne(productId);
  }

  public createProduct(product: Product): Observable<Product> {
    return this.post(product);
  }

  public updateProduct(productId: number, product: Product): Observable<Product> {
    return this.put(productId, product);
  }

  public deleteProduct(productId: number): Observable<Product> {
    return this.delete(productId);
  }

}
