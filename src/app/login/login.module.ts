import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  

})
export class LoginModule { }
