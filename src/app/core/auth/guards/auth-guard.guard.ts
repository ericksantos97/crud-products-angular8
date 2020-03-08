import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.tokenService.checkValidToken('token')) {
      this.tokenService.deleteToken();
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
