import { GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/auth/service/token.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Messages } from 'src/app/shared/messages/messages';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseResourceFormComponent implements OnInit {

  public user: User;
  public socialUser: SocialUser;

  constructor(protected injector: Injector,
    private service: LoginService,
    private alertService: AlertModalService,
    private tokenService: TokenService,
    private authService: AuthService) {
    super(injector);
  }

  public ngOnInit() {
    this.stateUser();
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

  private stateUser(): void {
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
    });
  }

  public signIn(): void {
    if (this.resourceForm.valid) {
      if (this.checkValidUser()) {
        this.successfulActionLogin(this.resourceForm.value.username);
        return;
      }

      this.alertService.showAlertWarning(Messages.USUARIO_NAO_ENCONTRADO);
    } else {
      this.alertService.showAlertDanger(Messages.PREENCHER_CAMPOS_OBRIGATORIOS);
    }

  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response: SocialUser) => {
      this.successfulActionLogin(response.firstName);
    }).catch(() => {
      this.alertService.showAlertWarning(Messages.USUARIO_NAO_ENCONTRADO);
    });
  }

  private checkValidUser(): boolean {
    const { username, password } = this.resourceForm.value;
    return (username === this.user.username && password === this.user.password);
  }

  private successfulActionLogin(userName: string): void {
    this.tokenService.setToken('token', userName);
    this.service.setEvent(userName);
    this.router.navigate(['/products']);
  }

}
