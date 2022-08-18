import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {EventService} from "../servics/event.service";

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

  constructor(private eventService:EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.eventService.getEvents().pipe(map(events=>events))
  }
}
