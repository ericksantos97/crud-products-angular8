import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private service: NgxSpinnerService) { }

  public intercept(req: HttpRequest<any>, handlerHttp: HttpHandler): Observable<HttpEvent<any>> {
    this.service.show();

    return handlerHttp.handle(req).pipe(tap(res => {
      if (res instanceof HttpResponse) {
        this.service.hide();
      }
    }),
      catchError(err => {
        this.service.hide();
        throw err;
      })
    );
  }

}
