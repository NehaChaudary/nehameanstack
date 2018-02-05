import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AuthServiceImpl } from '../auth.service';
import { resolve } from 'dns';
import { reject } from 'q';



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
private validateCredential(email,password)
{
  this.validate(email,password).then((response)=>{
    console.log(response)
    this.signUpWithEmailAndPassword(email,password)
  }).catch(function(error){
    console.log(error.message)

  }
  )
  console.log("firebase finished")

}



    private validate(email,password):Promise<any>{
      console.log("inside the validate")
      return new Promise<any>((resolve,reject)=>{
        console.log("inside call back")
        if(email="neha@neha.com"){
          reject("emailis already availabe in db")
        }
        else{
          resolve("user can perform login operation")
        }
        
      })   
    }
  signInWithGoogle(){
      
  }
 ngOnInit()
 {

 }

}
