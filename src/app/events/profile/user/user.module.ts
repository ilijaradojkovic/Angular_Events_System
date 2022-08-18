import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ProfileComponent} from "../profile.component";
import {LoginComponent} from "../login/login.component";
import {FormsModule} from "@angular/forms";



const userRoutes:Route[]=[
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),

  ],
  providers:[

  ]
})
export class UserModule { }
