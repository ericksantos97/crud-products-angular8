import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ngx-currency-mask/src/currency-mask.config';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
