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
import {EventListResolver} from "./resolvers/event-list.resolver";
import { ProfileComponent } from './events/profile/profile.component';
import { LoginComponent } from './events/profile/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./servics/auth.service";

export  const appRoutes:Routes=[
  {path:'events',component:EventListComponent,resolve:{events:EventListResolver}},
  {path:'events/new',component: CreateEventComponent,canDeactivate:['canDeactivateCreateEvent'] },
  {path:'events/:id',component: EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'user',loadChildren:()=>import('./events/profile/user/user.module').then(m=>m.UserModule)},
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
    EventErrorComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

  ],
  providers: [
    EventService,
    EventListResolver
    ,EventRouteActivator,
    AuthService,
    {provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export  function  checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm("You have not saved this event,do you really want to cancel?")
return true
}
