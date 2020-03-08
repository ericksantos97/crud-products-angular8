import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    PageHeaderComponent,
    FormFieldErrorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageHeaderComponent,
    FormFieldErrorComponent
  ]
})
export class SharedModule { }
