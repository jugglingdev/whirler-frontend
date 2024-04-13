import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { jwtDecode } from "jwt-decode";

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly tokenSubject = new BehaviorSubject<string | null>(null);

  private expiryTimer: any;

	constructor(private http: HttpClient, private router: Router) {}

  autoLogin() {
    const token = this.getToken();

    if (token) {
      this.tokenSubject.next(token);
    }
  }

	login(username: string, password: string): Observable<{token: string}> {
    this.expiryTimer = setInterval(() => { this.checkExpiry(); }, 60000);
		return this.http.post<{ token: string }>(`${environment.apiUrl}/login`, {
			username,
			password,
		});
	}

  signup(user: User): Observable<{token: string}> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/signup`, user);
  }

  parseErrorMessage(error): string {
    return JSON.stringify(error.error);
  }

	setToken(token: string) {
		localStorage.setItem('token', token);
		this.tokenSubject.next(token);
	}

	getToken(): string | undefined {
		return localStorage.getItem('token');
	}

	isLoggedIn(): boolean {
		return !!this.getToken();
	}

	logout() {
		localStorage.removeItem('token');
    if (this.expiryTimer) clearInterval(this.expiryTimer);
		this.tokenSubject.next(null);
		this.router.navigate(['/login']);
	}

  private checkExpiry(): void {
    if (this.tokenIsExpired()) this.logout();
  }

  private tokenIsExpired(): boolean {
    const token = this.getToken();
    const decoded = jwtDecode(token);
    const currentTime = new Date().getTime() / 1000;
    return currentTime > decoded.exp;
  }
}
