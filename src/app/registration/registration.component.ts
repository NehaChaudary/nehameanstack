import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AuthServiceImpl } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  
  
   user: UserModel = new UserModel();

  constructor(private authService : AuthServiceImpl){
    
  }

  signUpWithEmailAndPassword(email, password){
    console.log("email is ",email)
    console.log("password is ",password)
    this.authService.userSignUp(email, password)
  }
    
  signInWithGoogle(){
      
  }
 ngOnInit()
 {

 }

}
