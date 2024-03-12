import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(authForm: NgForm) {
    const {username, password} = authForm.value;

    this.authService.login(username, password)
      .subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          authForm.reset();
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      }
    );
  }
}
