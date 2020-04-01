import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
    result: any;
    authDetails: any;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth
) {
   /* this.afAuth.authState.subscribe(user => {
      this.router.navigateByUrl('/login');
    })*/
}

IsAuthorized(): boolean {
    this.afAuth.authState.subscribe(auth => { 
        if(auth) {
            this.authDetails; 
            this.result= true;
        }
        else{
            this.result= false;
        }
    })
    return this.result;
}

// Sign-in user details
getUserDetails(): any{
  return this.authDetails;    
}

// Firebase SignInWithPopup
OAuthProvider(provider) {   
    return this.afAuth.auth.signInWithPopup(provider)
        .then((res) => {
            this.ngZone.run(() => {
                this.result=1;
                this.postLoginReDirect();
            })
        }).catch((error) => {
            this.result=error;      
        })        
}

//Firrebase Sign-in with Email and Password
SigninWithEmailandPassword(email: string , password: string):any{    
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then((res) => {
            this.result=1;
        }).catch((error) => {
            this.result=error;
        })        
        return this.result;

}


// Firebase Google Sign-in
SigninWithGoogle() {
     this.OAuthProvider(new auth.GoogleAuthProvider())
        .then(res => {
            console.log('Successfully logged in!')
            return this.result;
        }).catch(error => {
            this.result=error;
        });        
}

SignUp(email: string ,password: string){
  this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then(
        (success) => {
        console.log(success);
        this.result=1;        
    }).catch(
        (err) => {        
        this.result=err;       
      })
return this.result;
}

postLoginReDirect()
{
    this.router.navigateByUrl('/members') 
}

// Firebase Logout 
SignOut() {
    return this.afAuth.auth.signOut().then(() => {        
        this.authDetails = null;
        this.router.navigate(['login']);
    })
}
RedirectToLogin(){
    this.authDetails = null;
    this.router.navigate(['login']);
}

}
