import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './routes/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { MainNavComponent } from './routes/main-nav/main-nav.component';
import { BasicComponent } from './routes/basic/basic.component';
import { ContainedComponent } from './routes/contained/contained.component';
import { AdvancedComponent } from './routes/advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    MainNavComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
