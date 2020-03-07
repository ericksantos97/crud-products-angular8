// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { EMPTY, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import Messages from 'src/app/shared/enums/messages.enum';
// import { AlertService } from '../../service/alert.service';
// import { TokenService } from '../service/token.service';

// @Injectable()
// export class ServerErrorsInterceptor implements HttpInterceptor {
//   constructor(
//     private route: Router,
//     private tokenService: TokenService,
//     private alertService: AlertService
//   ) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(request)
//       .pipe(
//         catchError((response) => {

//           switch (response.status) {

//             case 400:
//               this.alertService.showAlertDanger(Messages.ERRO_RESPOSTA_SERVIDOR);
//               break;
//             case 401:
//               this.alertService.showAlertDanger(Messages.SEM_PERMISSAO);
//               this.tokenService.excluirToken();
//               this.route.navigate(['/login']);
//               break;
//             case 403:
//               this.alertService.showAlertDanger(Messages.SEM_PERMISSAO);
//               this.tokenService.excluirToken();
//               this.route.navigate(['/login']);
//               break;
//             case 404:
//               this.alertService.showAlertDanger(Messages.ERRO_INESPERADO);
//               break;
//             case 500:
//               this.alertService.showAlertDanger(Messages.ERRO_INESPERADO);
//               break;
//             case 0:
//               this.alertService.showAlertDanger(Messages.FALHA_COMUNICACAO);
//               break;
//             default:
//               break;
//           }

//           return EMPTY;
//         })
//       );
//   }

// }
