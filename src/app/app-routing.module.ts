import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponent } from './routes/advanced/advanced.component';
import { BasicComponent } from './routes/basic/basic.component';
import { ContactComponent } from './routes/contact/contact.component';
import { ContainedComponent } from './routes/contained/contained.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'contained',
    component: ContainedComponent
  },
  {
    path: 'advanced',
    component: AdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
