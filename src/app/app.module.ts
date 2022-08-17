import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events/events-app/events-app.component';
import { EventListComponent } from './events/events-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import {EventService} from "./servics/event.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule, Routes} from "@angular/router";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventErrorComponent } from './events/event-error/event-error.component';
import {EventRouteActivator} from "./servics/event-route-activator.service";

export  const appRoutes:Routes=[
  {path:'events',component:EventListComponent},
  {path:'events/new',component: CreateEventComponent},
  {path:'events/:id',component: EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'404',component: EventErrorComponent},
  {path:'**',redirectTo:'/events',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,EventRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
