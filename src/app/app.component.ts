import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- navbar --> 
    <app-main-nav></app-main-nav> 

    <!-- routers get injected --> 
    <router-outlet class="pagecontent"></router-outlet>

    <!-- footer --> 
    <app-footer></app-footer> 
  `,
  styles: [`
    .pagecontent {
      margin-top: 90px; 
    }
  `]
})
export class AppComponent {
  title = 'angularWebsite';
}
