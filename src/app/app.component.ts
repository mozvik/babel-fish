import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeSlideIn } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeSlideIn
  ]
})
export class AppComponent {
  title = 'babel-fish';

  constructor() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }

}
