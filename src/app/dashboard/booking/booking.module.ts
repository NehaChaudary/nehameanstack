import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:BookingComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
