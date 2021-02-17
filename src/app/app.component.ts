import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header --> 
    <app-header></app-header> 
    
    <!-- routers get injected --> 
    <router-outlet></router-outlet>

    <!-- footer --> 
    <app-footer></app-footer> 
  `,
  styles: []
})
export class AppComponent {
  title = 'angularWebsite';
}
