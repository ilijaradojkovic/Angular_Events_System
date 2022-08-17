import { Component, OnInit } from '@angular/core';
import {MyEvent} from "../../models/myEvent";
import {EventService} from "../../servics/event.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:MyEvent[] = []
  constructor(private eventService:EventService,private toastService:ToastrService) {
  }

  ngOnInit(): void {
    this.events=this.eventService.getEvents()

  }


  handleThumbnailClick(name: string) {
    this.toastService.success(name)

  }
}
