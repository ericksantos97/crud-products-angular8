import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }
