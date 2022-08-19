import {Component, Input, OnInit} from '@angular/core';
import {MySession} from "../../../models/mySession";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
 @Input() sessions:MySession[] | undefined=[]
  constructor() { }

  ngOnInit(): void {
  }

}
