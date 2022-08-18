import {MyLocation} from "./myLocation";
import {MySession} from "./session";

export interface MyEvent {

    id:number
    name:string
    date:string
    time:string
    price: number
    imageUrl:string
    location?:MyLocation
  onlineUrl?:string
    sessions?:MySession[]



}

