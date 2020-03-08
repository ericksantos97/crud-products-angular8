import { Product } from './../model/product';
import { AfterContentChecked, Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ProductService } from '../service/product.service';
import { ToastrService } from 'ngx-toastr';
import { Messages } from 'src/app/shared/messages/messages';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends BaseResourceFormComponent implements OnInit, AfterContentChecked {

  public id: number;

  constructor(protected injector: Injector, private service: ProductService, private toastrService: ToastrService) {
    super(injector);
  }

  public ngOnInit(): void {
    this.setPageTitle();
    this.buildResourceForm();
    this.checkRouteId();
  }

  public ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      description: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])]
    });
  }

  public checkRouteId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    const product = this.route.snapshot.data.product;

    if (product) {
      this.resourceForm.patchValue(product);
    }
  }

  public submitForm(): void {
    this.submittingForm = true;

    if (this.id) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  public createProduct(): void {
    const product = Object.assign(new Product(), this.resourceForm.value);

    this.service.createProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
      this.toastrService.success(Messages.OPERACAO_SUCESSO);
    }, () => {
      this.toastrService.error(Messages.OPERACAO_ERRO);
    });
  }

  public updateProduct(): void {
    const product = Object.assign(new Product(), this.resourceForm.value);

    this.service.updateProduct(this.id, product).subscribe(res => {
      this.router.navigate(['/products']);
      this.toastrService.success(Messages.OPERACAO_SUCESSO);
    }, () => {
      this.toastrService.error(Messages.OPERACAO_ERRO);
    });
  }

  private setPageTitle(): void {
    if (this.route.snapshot.url[0].path === 'create') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  private creationPageTitle(): string {
    return 'Cadastrar';
  }

  private editionPageTitle(): string {
    return 'Editar';
  }

}
