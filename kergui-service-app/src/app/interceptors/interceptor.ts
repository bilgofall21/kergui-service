import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userOnline = localStorage.getItem('access_Token') ;

    // Assurez-vous que userOnline et userOnline.authorization sont définis
    if ( userOnline && userOnline) {
      const token = userOnline;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
export const TokenInterceptorProvider={
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}