import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyEvent} from "../../models/myEvent";

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {


  @Input() event:MyEvent
  constructor() {
  }


  ngOnInit(): void {
  }


}
