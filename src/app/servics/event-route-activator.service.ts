import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {EventService} from "./event.service";
import {Observable} from "rxjs";


@Injectable()
export class EventRouteActivator implements  CanActivate{
  constructor(private eventService:EventService,private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot){
   const eventExists=!!this.eventService.getEvent(Number(route.params['id']))
    if(!eventExists)
      this.router.navigate(['/404'])

    return eventExists
  }
}
