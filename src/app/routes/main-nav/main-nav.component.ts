import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  template: ` 
    <nav class="navbar navbar-expand-lg fixed-top navbar-inverse mb-4 navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/assets/icons/fullLogo@.svg">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="navbar-item" routerLink="/"> Home </a>
            </li>
            <li class="nav-item"> 
              <a class="navbar-item" routerLink="/contact"> Contact </a>
            </li>
            <li class="nav-item"> 
              <a class="navbar-item" routerLink="/basic"> Basic </a>
            </li>
            <li class="nav-item"> 
              <a class="navbar-item" routerLink="/contained"> Contained </a>
            </li>
            <li class="nav-item"> 
              <a class="navbar-item" routerLink="/advanced"> Advanced </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgb(255, 255, 255, 0.2) !important;
      margin: 2rem 2rem 0 2rem; 

    }
    .navbar-item {
      color: white; 
    }
    .navbar-brand {
      width: 165px; 
    }
  `]
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
