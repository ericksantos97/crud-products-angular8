import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(chaveToken: string, valorToken: string): void {
    window.localStorage.setItem(chaveToken, Math.random() * 9 + valorToken);
  }

  public getToken(chaveToken: string): string {
    return window.localStorage.getItem(chaveToken);
  }

  public checkValidToken(chaveToken: string): boolean {
    return !!window.localStorage.getItem(chaveToken);
  }

  public deleteToken(): void {
    window.localStorage.clear();
  }

}
