import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'linkedin-carousel';
  hideHeaderAndFooter: boolean = true;
  private routerEventsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.authService.autoLogin();

    this.routerEventsSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let blacklistedRoutes: string[] = ['/edit', '/create'];
      this.hideHeaderAndFooter = !blacklistedRoutes.includes(event.url);
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }
}
