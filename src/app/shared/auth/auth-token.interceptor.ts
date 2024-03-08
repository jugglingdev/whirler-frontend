import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    return next(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    }));
  }
  return next(req);
};
