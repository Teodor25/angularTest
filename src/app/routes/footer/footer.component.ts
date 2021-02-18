import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered"> 
        <p>Made with ---<> MAGIC </p>
        <br>
        <p style="font-size: 8px;"> by Teodor Jonasson</p> 
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
