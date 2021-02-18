import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body"> 
        <div class="container"> 
          <h2 class="title">Contact</h2> 
        </div> 
      </div> 
    </section>

    <section class="section" [ngStyle]="containerStyling"> 
      <div class="container" > 
          <form (ngSubmit)="submitForm()" #contactForm="ngForm"> 

            <!-- name --> 
            <div class="field">
              <label class="label">Name</label> 
              <input 
                type="text" 
                name="name" 
                class="input" 
                [(ngModel)]="name" 
                #nameInput="ngModel"
                required>

              <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
                Your name is required to send a message.
              </div>

            </div>  
            <!-- email --> 
            <div class="field">
              <label class="label">Email</label> 
              <input 
                type="email" 
                name="email" 
                class="input" 
                #emailInput="ngModel"
                [(ngModel)]="email"
                required
                email>

              <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
                You need to enter a valid email to send a message.
              </div>

            </div>
            <!-- message --> 
            <div class="field">
              <label class="label">Your Message</label> 
              <textarea 
                name="message" 
                class="textarea" 
                #messageInput="ngModel"
                [(ngModel)]="message"
              >
              </textarea> 

              <div class="help is-error" *ngIf="messageInput.invalid && messageInput.dirty">
                Your message is required to send a message.
              </div>

            </div>
            <!-- submit button --> 
            <div class="field">
              <button 
              type="submit" 
              class="button is-large is-warning"
              [disabled]="contactForm.invalid">
                Send! 
              </button>
            </div>                
        </form> 
      </div> 
    </section> 
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  
  //Styling objects 
  inputStyling = {
    color: ""
  }
  containerStyling = {
    backgroundColor: "rgb(0, 0, 0, 0)"
  }

  //Form attributes 
  name: string; 
  email: string;
  message: string; 

  constructor() { }

  ngOnInit(): void { }

  submitForm() {
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}.`
    alert(message)
    // grab all the fields from form and their values
    
  }

}
