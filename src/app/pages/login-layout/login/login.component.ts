import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/auth/service/token.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Messages } from 'src/app/shared/messages/messages';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseResourceFormComponent implements OnInit {

  public user: User;

  constructor(protected injector: Injector,
    private service: LoginService,
    private alertService: AlertModalService,
    private tokenService: TokenService) {
    super(injector);
  }

  public ngOnInit() {
    this.buildResourceForm();
    this.persistUser();
  }

  private persistUser(): void {
    this.user = this.service.getUser();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  public onClickLogin() {
    if (this.resourceForm.valid) {
      if (this.checkValidUser()) {
        this.tokenService.setToken('token', this.resourceForm.value.username);
        this.service.setEvent();
        this.router.navigate(['/products']);
        return;
      }

      this.alertService.showAlertWarning(Messages.USUARIO_NAO_ENCONTRADO);
    } else {
      this.alertService.showAlertDanger(Messages.PREENCHER_CAMPOS_OBRIGATORIOS);
    }

  }

  private checkValidUser(): boolean {
    const { username, password } = this.resourceForm.value;
    return (username === this.user.username && password === this.user.password);
  }

}
