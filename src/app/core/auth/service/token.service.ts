// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { AuthToken } from '../model/auth-token';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenService {

//   public jwtHelperService = new JwtHelperService();

//   constructor() { }

//   public adicionarToken(chaveToken: string, valorToken: string): void {
//     window.sessionStorage.setItem(chaveToken, valorToken);
//   }

//   public recuperarToken(chaveToken: string): string {
//     return window.sessionStorage.getItem(chaveToken);
//   }

//   public atualizarToken(chaveRefreshToken: string): string {
//     return window.sessionStorage.getItem(chaveRefreshToken);
//   }

//   public obterDataDeValidadeToken(token?: string): Date | null {
//     return this.jwtHelperService.getTokenExpirationDate(token);
//   }

//   public verificarSeTokenExpirou(token: string): boolean {
//     return this.jwtHelperService.isTokenExpired(token);
//   }

//   public decodificarToken(token: string): any {
//     return this.jwtHelperService.decodeToken(token);
//   }

//   public verificarTokenAtivo(chaveToken: string): boolean {
//     return !!window.sessionStorage.getItem(chaveToken);
//   }

//   public excluirToken(): void {
//     window.sessionStorage.clear();
//   }

// }
