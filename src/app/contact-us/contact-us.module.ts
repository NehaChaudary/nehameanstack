import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:ContactUsComponent}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
