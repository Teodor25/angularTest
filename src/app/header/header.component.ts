import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- header --> 
    <div class="navbar"> 
      <div class="navbar-brand">
        <a class="navbar-item"> 
          Agree
        </a>
      </div>

      <!-- menu --> 
      <div class="navbar-menu"> 
        <div class="navbar-end"> 
          <a class="navbar-item" routerLink="/"> Home </a>
          <a class="navbar-item" routerLink="/contact"> Contact </a>
          <a class="navbar-item" routerLink="/users"> Users </a> 
        </div>
      </div> 
    </div> 

    
  `,
  styles: [`
    .navbar-item {
      color: black !important; 
    }
    .navbar {
      background: transparent; 
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
