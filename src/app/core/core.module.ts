import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmModalComponent } from '../shared/components/confirm-modal/confirm-modal.component';
import { AuthGuard } from './auth/guards/auth-guard.guard';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-top-full-width',
        maxOpened: 1,
        preventDuplicates: true,
        progressBar: true
      }
    ),
    ModalModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    NavbarComponent,
    ConfirmModalComponent,
    LoaderComponent
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarComponent,
    LoaderComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class CoreModule { }
