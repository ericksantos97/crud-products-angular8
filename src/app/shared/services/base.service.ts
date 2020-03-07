import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class BaseService<T, ID> {

  protected base: string;
  protected http: HttpClient;

  protected httpOptions: {
    headers: HttpHeaders
  };

  constructor(protected injector: Injector,
              protected baseUrl: string,
              protected options?: { headers: HttpHeaders }
  ) {
    this.http = injector.get(HttpClient);
    this.base = 'http://localhost:3000' + baseUrl;

    if (!options) {
      this.httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    } else {
      this.httpOptions = options;
    }
  }

  get(complementUrl?: string): Observable<T> {
    // if (this.loaderService) {
    //   this.loaderService.show();
    // }
    return this.http.get<T>(this.base + this.getComplementUrl(complementUrl), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  post(t: T, complementUrl?: string): Observable<T> {
    return this.http.post<T>(this.base + this.getComplementUrl(complementUrl), t, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  put(id: ID, t: T, complementUrl?: string): Observable<T> {
    return this.http.put<T>(`${this.base}${this.getComplementUrl(complementUrl)}/${id}`, t, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  patch(id: ID, t: T, complementUrl?: string): Observable<T> {
    return this.http.patch<T>(`${this.base}${this.getComplementUrl(complementUrl)}/${id}`, t, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  delete(id: ID): Observable<T> {
    return this.http.delete<T>(`${this.base}/${id}`, this.options)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }


  findOne(id: ID): Observable<T> {
    return this.http.get<T>(`${this.base}/${id}`, this.options).pipe(
      retry(1),
      catchError(this.handleError));
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.base, this.options).pipe(
      retry(1),
      catchError(this.handleError));
  }

  search(filter: T, complementUrl?: string): Observable<T[]> {
    return this.http.post<T[]>(`${this.base}${this.getComplementUrl(complementUrl)}/consultar`, filter, this.options)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  private getComplementUrl(complementUrl: string): string {
    return complementUrl ? complementUrl : '';
  }

  protected handleError(err) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Código: ${err.status}\n Mensagem: ${err.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
