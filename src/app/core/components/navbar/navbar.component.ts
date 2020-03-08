import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/pages/login-layout/service/login.service';
import { TokenService } from '../../auth/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public nameUser = '';
  public subscription: Subscription;
  public isToken = '';

  constructor(private service: LoginService, private tokenService: TokenService) { }

  public ngOnInit(): void {
    this.subscription = this.service.getEvent().subscribe(value => this.nameUser = value);
    this.isUserLogged();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private isUserLogged(): void {
    this.isToken = this.tokenService.getToken('token');
  }

}
