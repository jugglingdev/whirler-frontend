import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly tokenSubject = new BehaviorSubject<string | null>(null);

	constructor(private http: HttpClient, private router: Router) {}

  autoLogin() {
    const token = this.getToken();

    if (token) {
      this.tokenSubject.next(token);
    }
  }

	login(username: string, password: string) {
		return this.http.post<{ token: string }>(`${environment.apiUrl}/login`, {
			username,
			password,
		});
	}

  signup(user: User) {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/signup`, user);
  }

	setToken(token: string) {
		localStorage.setItem('token', token);
		this.tokenSubject.next(token);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	isLoggedIn() {
		return !!this.getToken();
	}

	logout() {
		localStorage.removeItem('token');
		this.tokenSubject.next(null);
		this.router.navigate(['/login']);
	}
}
