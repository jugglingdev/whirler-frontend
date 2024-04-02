import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showSettings = false;
  isAuthenticated = false;
  currentUser: User;
  private tokenSubscription: Subscription;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.tokenSubscription = this.authService.tokenSubject.subscribe(token => {
      this.isAuthenticated = !!token;
      this.fetchUser();
    });
  }

  onToggleSettings() {
    this.showSettings = !this.showSettings;
  }

  fetchUser() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    if (this.tokenSubscription) {
      this.tokenSubscription.unsubscribe();
    }
  }
}
