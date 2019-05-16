import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { interval } from 'rxjs';

//  service
import { LoadingProgressService } from './shared/services/loading-progess.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: 'custom-content'
  }
})
export class AppComponent implements OnInit {
  public spinnerState: SpinnerState = new SpinnerState();
  title = 'spritiking.de';

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    private router: Router,
    private swUpdate: SwUpdate,
    private spinnerService: LoadingProgressService,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((route: any) => {
      if (route && route.url) {
        this.scrollTop(route);
      }
    });

    this.spinnerService.spinner().subscribe((spinnerState: SpinnerState) => {
      setTimeout(() => {
        this.spinnerState = spinnerState;
      });
    });
  }

  private scrollTop(route: any) {
    if (route instanceof NavigationStart) {
      if (route.url !== this.lastPoppedUrl) {
        this.yScrollStack.push(window.scrollY);
      }
    } else if (route instanceof NavigationEnd) {
      if (route.url === this.lastPoppedUrl) {
        this.lastPoppedUrl = undefined;
        window.scrollTo(0, this.yScrollStack.pop());
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  private swUpdateHandler() {
    // console.log(environment.production);

    if (this.swUpdate.isEnabled) {
      // remove console entry after test
      // checkForUpdate loads  - if a n update is available - already the assets which defined as 'prefetch' before prompting
      this.swUpdate.checkForUpdate();
      // console.log('Initial update check. Current build : ' + this.appVersion + ' date --> ' + new Date());

      interval(environment.serviceWorkerConfig.timespan).subscribe(() => {
        // interval(60 * 1000 * 30).subscribe(() => {
        // checkForUpdate loads  - if a n update is available - already the assets which defined as 'prefetch' before prompting
        this.swUpdate.checkForUpdate();
        // console.log('Ongoing Update check. Current build is: ' + this.appVersion + ' date --> ' + new Date());
      });

      this.swUpdate.available.subscribe((event: any) => {
        // console.log('current version is', event.current);
        // console.log('available version is', event.available);
        // console.log(event);
        this.swUpdate.activateUpdate();
      });

      this.swUpdate.activated.subscribe((event: any) => {
        // console.log('old version was', event.previous);
        // console.log('new version is', event.current);
        if (confirm('Ein Update wurde geladen. Jetzt aktualisieren ?')) {
          document.location.reload();
        }
      });
    }
  }

  // setCookieAccepted(): void {
  //   localStorage.setItem(this.cookieAcceptedString, 'true');
  // }
}

class SpinnerState {
  show: boolean = false;
  text: string = null;
}

