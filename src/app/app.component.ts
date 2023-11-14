import { Component } from '@angular/core';
import { ActivatedRoute, EventType, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linkedin-carousel';
  hideHeaderAndFooter: boolean = true;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.authService.autoLogin();
    this.router.events.pipe(
      filter((event) => {
        return event.type == EventType.NavigationEnd;
      })
    ).subscribe((event: NavigationEnd) => {
      let blacklistedRoutes: string[] = ['/edit', '/create'];
      this.hideHeaderAndFooter = !blacklistedRoutes.includes(event.url);
    });
  }

}
