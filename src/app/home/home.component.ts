import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myFirstSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    /*let myFirstObserver:Observable<number>=Observable.interval(1000);
    this.myFirstSubscription = myFirstObserver.subscribe(
      (data:number)=>{
        console.log("your normal data is data",data)
      },
      (error)=>{
        console.log("error is error")
      },
      ()=>{
        console.log("obserevtable is done")
      }
    )
    myFirstObserver.subscribe(
      (data:number)=>{
        console.log("your normal data is",data)
      },
      ()=>{
        console.log("observable is done")
      }
    )*/
  }

}
