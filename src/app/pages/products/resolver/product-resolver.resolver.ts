import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../service/product.service';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private service: ProductService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    if (route.params && route.params.id) {
      return this.service.findOne(+route.params.id);
    }

    return of({});
  }


}
