import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <div class="container nav-top"> 
      <h1>Basics of Animation</h1>
      <div class="container-fluid"> 
        <div class="row"> 
          <div class="col-5"> Yo yo yo </div>
          <div class="col-7"> Hva så der </div>
        </div>
      </div>
    </div> 
  `,
  styles: [``]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
