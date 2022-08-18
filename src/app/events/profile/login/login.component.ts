import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../servics/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(value: any) {
    this.authService.loginUser(value.userName,value.password)
    this.router.navigate(['events'])
  }

  cancle(){
    this.router.navigate(['events'])

  }
}
