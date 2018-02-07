import * as Firebase from 'Firebase';
import { Observable } from 'rxjs/';
import { from } from 'rxjs/observable/from';
import { UserDetail } from './model/user-detail.model';
import { APP_CONSTANTS } from './util/app.constants';

export interface AuthService{
 userSignUp(email,password):Observable<any>
 userSignIn(email,password):Observable<any>
 insertUserInfo(user:Firebase.User)
     getToken();
     getUserDetail();
     reloadTokenAndUserDetail();
     logout();
 
     refreshToken();
 }

export class AuthServiceImpl implements AuthService{

    public appConstants = APP_CONSTANTS;
      private token: string;
      private userDetail: UserDetail;


    
    userSignUp(email:any,password:any){
        return this.signUpWithEmailAndPassword(email,password)
    } 

    userSignIn(email:any,password:any){
        return this.signInWithEmailAndPassword(email,password)
    }
    insertUserInfo(user:Firebase.User){
       this.storeUserInfo(user)
    }
    
   private signUpWithEmailAndPassword(email,password):Observable<any>
  {
      return from(Firebase.auth().createUserWithEmailAndPassword(email,password))

    }
    private signInWithEmailAndPassword(email,password):Observable<any>
    {
return from(Firebase.auth().signInWithEmailAndPassword(email,password))
    }


private storeUserInfo(user: Firebase.User){
          console.log(user)
         from(user.getIdToken(true)).subscribe(
             data =>{
                 console.log(data)
                 this.token = data;
                 this.storeValueInLocalStorage(this.appConstants.TOKEN, data);
             },
             error=>{
                 console.log(error)
             }
             
         )
 
         this.createUserDetail(user)
 
     }
 
     private createUserDetail(user: Firebase.User){
         let userDetail : UserDetail = new UserDetail();
         userDetail.displayName = user.displayName;
         userDetail.emailId = user.email;
         userDetail.emailVerified = user.emailVerified;
         userDetail.phone = user.phoneNumber
         userDetail.photoURL = user.photoURL
         this.userDetail = userDetail;
         this.storeValueInLocalStorage(this.appConstants.USER_DETAIL, JSON.stringify(userDetail));
      }
  


      storeValueInLocalStorage(key: string, value: string){
                localStorage.setItem(key, value);
            }
        
            getValueFromLocalStorage(key){
                return localStorage.getItem(key)
            }
        
            removeValueFromLocalStorage(key){
                localStorage.removeItem(key)
            }
        
            getToken(){
                console.log("getToken ", this.token)
                return this.token;
            }
            getUserDetail(){
                console.log("getUserDetail ", this.userDetail)
                return this.userDetail;
            }
        
            reloadTokenAndUserDetail(){
                //this.storeUserInfo(Firebase.auth().currentUser);
                this.token = this.getValueFromLocalStorage(this.appConstants.TOKEN)
                this.userDetail = JSON.parse(this.getValueFromLocalStorage(this.appConstants.USER_DETAIL))
            }
        
            logout(){
                Firebase.auth().signOut();
                this.removeValueFromLocalStorage(this.appConstants.TOKEN)
                this.removeValueFromLocalStorage(this.appConstants.USER_DETAIL)
            }
        
            refreshToken(){
        
                //Students section
        
            }



signInWithGoogle(){
         
}

 }