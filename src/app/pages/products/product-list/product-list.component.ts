import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ToastrService } from 'ngx-toastr';
import { Messages } from 'src/app/shared/messages/messages';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private service: ProductService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.service.getAllProducts().subscribe((result: Product[]) => {
      this.products = result;
    }, () => {
      this.toastrService.error(Messages.ERRO_GENERICO_CARREGAMENTO('Products'));
    });
  }

  public deleteProduct(productId: number) {
    const mustDelete = confirm('Deseja realmente excluir este item.');

    if (mustDelete) {
      this.service.deleteProduct(productId).subscribe(
        () => this.getAllProducts(),
        () => alert('Erro ao tentar excluir.')
      );
    }
  }

}
