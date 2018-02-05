import * as Firebase from 'Firebase';
export interface AuthService{
    userSignUp(email, password)
 }

export class AuthServiceImpl implements AuthService{
      
    userSignUp(email: any, password: any) {
        this.signUpWithEmailAndPassword(email, password)
    }
  
    private signUpWithEmailAndPassword(email, password){
        //console.log("Sign up with email and password called !")
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response:Firebase.User){
            console.log(response)
            let currentUser:Firebase.User=Firebase.auth().currentUser;
            console.log("current user is",currentUser.email)
            console.log("current user1 is",currentUser.displayName)
            currentUser.getIdToken(true).then((token: string) => {
                console.log("token is",token)
            },(error:any)=>{
                console.log(error)
            })
            console.log("we got google firebase auth response")
        }).catch(function(error){
            console.log(error.message)
        })
        

    }
    signInWithGoogle(){
         
     }
 
 }