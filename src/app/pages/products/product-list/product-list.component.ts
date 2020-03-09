import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Messages } from 'src/app/shared/messages/messages';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private service: ProductService, private alertService: AlertModalService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.service.getAllProducts().subscribe((result: Product[]) => {
      this.products = result;
    }, () => {
      this.alertService.showAlertDanger(Messages.ERRO_GENERICO_CARREGAMENTO('Produtos'));
    });
  }

  public deleteProduct(productId: number) {
    const result$ = this.alertService.showConfirm('Confirmação', Messages.CONFIRMAR_EXCLUSAO);
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.service.delete(productId) : EMPTY)
    ).subscribe(
      () => this.getAllProducts(),
      () => this.alertService.showAlertDanger(Messages.ERRO_EXCLUSAO)
    );
  }

}
