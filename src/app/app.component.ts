import { Component } from '@angular/core';
import * as Firebase from 'firebase';
import { OnInit } from '@angular/core';
import { AuthServiceImpl } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {


  
  constructor(private authService: AuthServiceImpl){

  let  config = {
    apiKey: "AIzaSyBjiZV4MLSYq5rYx1Ykhqmns0odXHe_Gpk",
    authDomain: "project12345-8dcb0.firebaseapp.com",
   // databaseURL: "https://project12345-8dcb0.firebaseio.com",
   // projectId: "project12345-8dcb0",
    //storageBucket: "project12345-8dcb0.appspot.com",
   // messagingSenderId: "761098185749"
  };
  Firebase.initializeApp(config);
}
ngOnInit(): void {
      this.authService.reloadTokenAndUserDetail()
     }

}
