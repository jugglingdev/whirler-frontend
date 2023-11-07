import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;
  errorMessage: string = null;
  authObs: Observable<AuthResponse>;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(authForm: NgForm) {
    const {email, password} = authForm.value;

    if (this.isLoginMode) {
      this.authObs = this.authService.logIn(email, password);
    } else {
      this.authObs = this.authService.signUp(email, password);
    }

    this.authObs.subscribe(
      {
        next: (res) => {
          authForm.reset();
          this.router.navigate(['bookshelf']);
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      }
    );
  }
}
