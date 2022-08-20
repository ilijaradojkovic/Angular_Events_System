import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servics/auth.service";
import {MySession} from "../models/mySession";
import {EventService} from "../servics/event.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  foundSessions:MySession[]=[]
  showDialog:boolean=false
  constructor(public authService:AuthService,private eventService:EventService) {
    this.searchTerm=""
  }

  ngOnInit(): void {

  }

  searchSessions() {

     this.eventService.searchSessions(this.searchTerm)
      .subscribe(sessions=>{
      this.foundSessions=sessions
      console.log(sessions)
        this.showDialog=true
    })
  }
}
