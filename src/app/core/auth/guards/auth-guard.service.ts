// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from '../service/auth.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) {
//   }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.authService.isUsuarioAutenticado()) {
//       return true;
//     }

//     // redireciona para o login
//     this.router.navigateByUrl('/login');
//     console.log('Usuário não autenticado --> Efetuar login');
//     return false;
//   }

// }
