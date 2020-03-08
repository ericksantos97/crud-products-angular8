// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import { TokenService } from '../service/token.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private router: Router, private injector: Injector) { }

//   public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const auth = this.injector.get(TokenService);
//     const isToken = auth.checkValidToken('token');

//     if (isToken) {
//       const clonedReq = req.clone();
//       return this.isRequest(clonedReq, next);
//     } else {
//       auth.deleteToken();
//       this.router.navigateByUrl('/login');
//     }

//     return next.handle(req.clone());
//   }

//   private isRequest(req: HttpRequest<any>, handlerHttp: HttpHandler) {
//     return handlerHttp.handle(req).pipe(tap(res => {
//       if (res instanceof HttpResponse) {
//         console.log('Sucesso na requisição');
//       }
//     }),
//       catchError(err => {
//         console.log('Erro na requisição');
//         throw err;
//       })
//     );
//   }

// }
