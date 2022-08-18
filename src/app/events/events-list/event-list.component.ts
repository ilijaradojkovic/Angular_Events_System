import { Component, OnInit } from '@angular/core';
import {MyEvent} from "../../models/myEvent";
import {EventService} from "../../servics/event.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:MyEvent[]= []
  constructor(private activeRoute:ActivatedRoute,
    private eventService:EventService
              ,private toastService:ToastrService) {
  }

  ngOnInit(): void {

    this.events=this.activeRoute.snapshot.data['events']


  }


  handleThumbnailClick(name: string) {
    this.toastService.success(name)

  }
}
