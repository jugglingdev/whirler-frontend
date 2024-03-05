import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from './auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
	const authService = inject(AuthenticationService);
	const authToken = authService.getToken();

	const authReq = authToken
		? req.clone({
				headers: req.headers.set('Authorization', `Bearer ${authToken}`),
		  })
		: req;
	return next(authReq);
};
