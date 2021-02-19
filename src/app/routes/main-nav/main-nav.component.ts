import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  template: ` 
    <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark rgba-white-slight sticky-top">
      <mdb-navbar-brand>
        <a class="navbar-brand" href="#">
          <img src="/assets/icons/fullLogoEd2.svg">
        </a>
      </mdb-navbar-brand>
      <links>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link waves-light" mdbWavesEffect routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-light" mdbWavesEffect routerLink="/contact"> Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-light" mdbWavesEffect routerLink="/basic"> Basic </a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link waves-light" mdbWavesEffect routerLink="/contained"> Contained </a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link waves-light"  mdbWavesEffectrouterLink="/advanced"> Advanced </a>
          </li>
        </ul>
        <span class="navbar-text white-text">
            Navbar text with an inline element
        </span>
      </links>
    </mdb-navbar>
    
  `,
  styles: [`
    .nav-item {
      color: white; 
      transition-duration: 0.5s;
    }
    .nav-item:hover {
      background: none; 
      transform: scale(1.2); 
      color: white;
      text-decoration: none; 
    }
    .navbar-brand {
      width: 125px; 
    }
  `]
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
