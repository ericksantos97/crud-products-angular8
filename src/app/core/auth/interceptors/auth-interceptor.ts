// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../service/auth.service';
// import { TokenService } from '../service/token.service';
// import { catchError, tap } from 'rxjs/operators';
// import { AuthToken } from '../model/auth-token';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) { }

//   public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (req.headers.get('No-Auth') === 'True') {
//       return next.handle(req.clone());
//     }

//     const tokenVerificado = this.verificarToken();

//     if (!!tokenVerificado) {
//       const clonedReq = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer ' + this.tokenService.recuperarToken('userToken'))
//       });

//       return this.verificarRequisicao(clonedReq, next);
//     } else {
//       this.authService.limparSessaoUsuario();
//       this.router.navigateByUrl('/login');
//     }
//   }

//   private verificarRequisicao(requisicao: HttpRequest<any>, handlerHttp: HttpHandler) {
//     return handlerHttp.handle(requisicao).pipe(tap(res => {
//       if (res instanceof HttpResponse) {
//         console.log('Sucesso na requisição');
//         // FINALIZAR LOADING;
//       }
//     }),
//       catchError(err => {
//         console.log('Erro na requisição');
//         // FINALIZAR LOADING;
//         throw err;
//       })
//     );
//   }

//   private verificarToken(): string {
//     const token = this.tokenService.recuperarToken('userToken');

//     if (!!token && this.tokenService.verificarSeTokenExpirou(token)) {
//       this.authService.atualizarTokenSessao(token).subscribe((novoToken: AuthToken) => {
//         this.authService.criarUsuarioSessao(novoToken);
//         return novoToken.access_token;
//       });
//     } else {
//       return token;
//     }
//   }
// }
