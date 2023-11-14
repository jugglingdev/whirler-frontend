import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { environment } from "src/environments/environment";

const SIGN_UP_URL = environment.signupUrl;
const LOGIN_URL = environment.loginUrl;

export interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
};

interface UserData {
  email: string,
  id: string,
  _token: string,
  _tokenExpirationDate: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser = new BehaviorSubject<User>(null);
  private tokenExpTimer: any;

  constructor (private http: HttpClient, private router: Router) {}

  autoLogin() {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) return;
    const { email, id, _token, _tokenExpirationDate } = userData;

    const loadedUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
    }
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponse>(
      LOGIN_URL,
      {email, password, returnSecureToken: true}
    ).pipe(
      tap(res => {
        const {email, localId, idToken, expiresIn} = res;

        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    );
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(
      SIGN_UP_URL,
      {email, password, returnSecureToken: true}
    ).pipe(
      tap(res => {
        const {email, localId, idToken, expiresIn} = res;

        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    )
  }

  autoLogOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logOut();
    }, expDuration)
  }

  logOut() {
    this.currentUser.next(null);
    localStorage.removeItem('currentUser');
    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
    this.router.navigate(['auth']);
  }

  handleAuth(email: string, id: string, token: string, expiresIn: number) {
    const tokenExpiration = new Date(new Date().getTime() + (expiresIn * 1000));
    this.autoLogOut(expiresIn * 1000);
    const user = new User(
      email, id, token, tokenExpiration
    );

    this.currentUser.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
