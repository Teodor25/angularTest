import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contained',
  template: `
    <h1>Self-contained Animation</h1>
    <div class="container-fluid"> 
      <div class="row"> 
        <div class="col-12"> kæft det går ned </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ContainedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
