import { Product } from './../model/product';
import { AfterContentChecked, Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends BaseResourceFormComponent implements OnInit, AfterContentChecked {

  public id: number;

  constructor(protected injector: Injector, private service: ProductService) {
    super(injector);
  }

  public ngOnInit(): void {
    this.setCurrentAction();
    this.checkRouteId();
    this.buildResourceForm();
  }

  public ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      description: [null],
      price: [null, Validators.compose([Validators.required])]
    });
  }

  public checkRouteId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.service.getProductById(this.id).subscribe(result => this.resourceForm.patchValue(result));
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

    this.service.createProduct(product).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public updateProduct(): void {
    const product = Object.assign(new Product(), this.resourceForm.value);

    this.service.updateProduct(this.id, product).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  protected setCurrentAction(): void {
    if (this.route.snapshot.url[0].path === 'create') {
      this.currentAction = 'create';
    } else {
      this.currentAction = 'edit';
    }
  }

  protected setPageTitle(): void {

    if (this.currentAction === 'create') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return 'Cadastrar';
  }

  protected editionPageTitle(): string {
    return 'Editar';
  }

}
