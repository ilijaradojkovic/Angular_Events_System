import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyEvent} from "../../models/myEvent";
import {EventService} from "../../servics/event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty:boolean=true
  newEvent:MyEvent={
    id:-1,
    name:"",
    location:{
      address:"",
      city:"",
      country:""
    },
    price:0,
    onlineUrl:"",
    time:"",
    date:"",
    sessions:[],
    imageUrl:""
  }

  constructor(private router:Router,private eventService:EventService) { }

  ngOnInit(): void {
  }

  cancle() {
    this.router.navigate(['/events'])
  }

  saveEvent(value:MyEvent) {
    this.eventService.saveEvent(value)
    //da bi nam dalo da napustimo stranicu bez pitanja ovo je guard
    this.isDirty=false
    this.router.navigate(['/events'])

  }

  cancel() {

  }
}
