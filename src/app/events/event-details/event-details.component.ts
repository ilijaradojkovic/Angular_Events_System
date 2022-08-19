import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyEvent} from "../../models/myEvent";
import {EventService} from "../../servics/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MySession} from "../../models/mySession";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:MyEvent | undefined
  addMode:boolean=false
  @Output() cancelAddMode:EventEmitter<void>=new EventEmitter<void>()
  constructor(private eventService:EventService,private routInfo:ActivatedRoute,private router:Router) {

}

  ngOnInit(): void {
const id= this.routInfo.snapshot.params['id']

this.event=this.eventService.getEvent(Number(id))


  }

  addSession() {
this.addMode=true
  }

  ShowSessions() {
    this.addMode=false

  }

  SaveSessionToEvent($event: MySession) {
    const idNext=Math.max.apply(null,this.event?.sessions.map(s=>s.id)!)
$event.id=idNext
this.event?.sessions.push($event)
this.eventService.updateEvent(this.event!)
    this.addMode=false
}

  CancelAddMode() {
    this.addMode=false
  }
}
