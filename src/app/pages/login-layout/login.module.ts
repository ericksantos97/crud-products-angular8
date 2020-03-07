import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    // SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
