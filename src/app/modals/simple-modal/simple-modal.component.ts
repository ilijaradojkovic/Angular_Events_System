import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
