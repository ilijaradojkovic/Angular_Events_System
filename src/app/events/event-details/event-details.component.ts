import { Component, OnInit } from '@angular/core';
import {MyEvent} from "../../models/myEvent";
import {EventService} from "../../servics/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:any
  constructor(private eventService:EventService,private routInfo:ActivatedRoute) {

}

  ngOnInit(): void {
const id= this.routInfo.snapshot.params['id']

this.event=this.eventService.getEvent(Number(id))


  }

}
