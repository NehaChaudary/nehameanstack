import { Component, OnInit } from '@angular/core';
import * as Firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Rx';
import { AuthServiceImpl } from '../auth.service';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  constructor(private authservices: AuthServiceImpl,private router: Router) { }

  ngOnInit() {
    this.authservices.getToken()
    this.authservices.getUserDetail()
    
  }
  
  

  

  

//foe html communication
logInWithUserNameAndPassword(email,password){
  this.authservices.userSignIn(email,password).subscribe(
    data=>{
      console.log(data)
      this.storeInfoSubscriber(data)
      console.log("loginWithUsernameAndPassword ends")
      this.router.navigate(['home'])
    },
    error=>{
      console.log(error.msg)
    }
  )
}
      storeInfoObservable(user:Firebase.User):Observable<any>{
        return Observable.create((observer:Observer<any>)=>{
           

          setTimeout(()=>{
            observer.next(user)
          },5000)

        })
      }
storeInfoSubscriber(user:Firebase.User){
  console.log("inside the subscription start")
  this.storeInfoObservable(user).subscribe(
    data=>{
      console.log("store info of the user data")
      this.authservices.insertUserInfo(data)
      console.log("user detail ends")
    },
    error=>{
      console.log("while subscripting user info")
    }
  )
}


resetForm(myForm: NgForm){
  console.log("Reset Form")
  myForm.reset();
}


}
