// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthToken } from '../model/auth-token';
// import * as jwt_decode from 'jwt-decode';
// import { Router } from '@angular/router';
// import { TokenService } from './token.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private router: Router, private httpclient: HttpClient, private tokenService: TokenService) { }

//   public obterToken(username: string, password: string): Observable<AuthToken> {

//     const tokenEndpoint = '/frotas/oauth/token';
//     const clientId = environment.clientId;
//     const clientSecret = environment.clientSecret;

//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'No-Auth': 'True',
//         Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
//       })
//     };

//     const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=password&username=${username}&password=${password}`;

//     return this.httpclient.post<AuthToken>(tokenEndpoint, body, httpOptions);
//   }

//   public atualizarTokenSessao(tokenExpirado: string): Observable<AuthToken> {

//     const tokenEndpoint = '/frotas/oauth/token';
//     const clientId = environment.clientId;
//     const clientSecret = environment.clientSecret;

//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'No-Auth': 'True',
//         Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
//       })
//     };

//     const body = `grant_type=refresh_token&refresh_token=${tokenExpirado}`;

//     return this.httpclient.post<AuthToken>(tokenEndpoint, body, httpOptions);
//   }

//   public criarUsuarioSessao(authToken: AuthToken): void {
//     this.tokenService.adicionarToken('userToken', authToken.access_token);
//     const tokenDecoded: any = this.tokenService.decodificarToken(authToken.access_token);
//     this.tokenService.adicionarToken('user_name', tokenDecoded.user_name);
//     console.log('Usuário autenticado --> ' + tokenDecoded.user_name);
//     this.router.navigate(['/home']);
//   }

//   public obterUsuarioSessao(): any {
//     console.log(this.tokenService.decodificarToken(this.tokenService.recuperarToken('userToken')));
//   }

//   public isUsuarioAutenticado(): boolean {
//     return this.tokenService.verificarTokenAtivo('userToken');
//   }

//   public limparSessaoUsuario() {
//     this.tokenService.excluirToken();
//   }

// }
