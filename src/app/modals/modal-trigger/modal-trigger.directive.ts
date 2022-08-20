import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements  OnInit{
 el:HTMLElement
  constructor( ref:ElementRef) {


  }

  ngOnInit(): void {

  }

}
