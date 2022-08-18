import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../servics/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    let firstName=new FormControl
    (this.authService.currentUser?.firstName,Validators.required)
    let lastName=new FormControl
    (this.authService.currentUser?.lastname,Validators.required)
    this.profileForm=new FormGroup({
      firstName:firstName,
      lastName:lastName
    })
  }

  onCancel() {
    this.router.navigate(['events'])

  }

  saveProfile(value: any) {
    if(this.profileForm.valid)
      this.authService.updateCurrentUser(value.firstName,value.lastName)
    else{

    }
  }

  validateFirstName():boolean {
   return this.profileForm.controls['firstName'].invalid && this.profileForm.controls['firstName'].touched
  }

  validateLastName():boolean {
   return  this.profileForm.controls['lastName'].invalid && this.profileForm.controls['lastName'].touched
  }
}
