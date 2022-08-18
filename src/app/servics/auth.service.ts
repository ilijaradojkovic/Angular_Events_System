import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:User |null=null

  constructor( ) { }


  loginUser(username:string,password:string){

    this.currentUser={
      id:1,
      username:username,
      firstName:"jfew",
      lastname:"sdagf"
    }
  }

  isAuthenticated(){
    return !!this.currentUser
  }

  updateCurrentUser(firstName:string,lastName:string) {
    console.log(firstName+"fasf" +lastName)
   this.currentUser!.firstName=firstName
    this.currentUser!.lastname=lastName
  }
}
