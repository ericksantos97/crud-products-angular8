import { AuthService } from 'angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/pages/login-layout/service/login.service';
import { TokenService } from '../../auth/service/token.service';
import { Router } from '@angular/router';
import { browser } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public nameUser = '';
  public subscription: Subscription;

  constructor(private service: LoginService,
              private tokenService: TokenService,
              private router: Router,
              private authService: AuthService) { }

  public ngOnInit(): void {
    this.subscription = this.service.getEvent().subscribe(value => {
      this.nameUser = value;
      this.isUserLogged();
    });
    this.isUserLogged();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isUserLogged(): string {
    return this.tokenService.getToken('token');
  }

  public signOut(): void {
    this.authService.signOut();
    this.tokenService.deleteToken();
    this.router.navigate(['login']);
  }

}
