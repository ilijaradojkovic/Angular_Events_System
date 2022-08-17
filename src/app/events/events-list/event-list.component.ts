import { Component, OnInit } from '@angular/core';
import {MyEvent} from "../../models/myEvent";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
event1:MyEvent=
  {
    id: 1,
    name: 'Angular Connect',
    date: '09/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


}
