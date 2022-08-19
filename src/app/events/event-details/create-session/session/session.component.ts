import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MySession} from "../../../../models/mySession";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
   abstract: FormControl;
   level: FormControl;
   name: FormControl;
   presenter: FormControl;
   duration: FormControl;
   newSessionForm: FormGroup
  @Output() saveNewSession:EventEmitter<MySession>=new EventEmitter<MySession>()
  @Output() cancelAddMode:EventEmitter<void>=new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
    this.name=new FormControl('',Validators.required)
    this.presenter=new FormControl('',Validators.required)
    this.duration=new FormControl('',Validators.required)
    this.level=new FormControl('',Validators.required)
    this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400)])

      this.newSessionForm=new FormGroup({
        name:this.name,
        presenter:this.presenter,
        duration:this.duration,
        level:this.level,
        abstract:this.abstract
      })
  }

  saveSession(value:MySession) {
 this.saveNewSession.emit(value)
  }


  onCancel() {
    this.cancelAddMode.emit()
  }
}
