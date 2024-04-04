import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(authForm: NgForm) {
    const {firstName, lastName, username, email, password, passwordConfirmation} = authForm.value;

    const user = new User({
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
      password_confirmation: passwordConfirmation
    });

    this.authService.signup(user)
      .subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          authForm.reset();
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          this.parseErrorMessage(error);
        }
      }
    );
  }

  private parseErrorMessage(error) {
    this.errorMessage = JSON.stringify(error.error);
  }
}
