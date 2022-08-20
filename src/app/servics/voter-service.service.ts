import { Injectable } from '@angular/core';
import {MySession} from "../models/mySession";

@Injectable({
  providedIn: 'root'
})
export class VoterServiceService {

  constructor() { }

  deleteVoter(session: MySession, username: string ) {
  session.voters=session.voters.filter(voter=>voter!==username)
  }

  addVoter(session: MySession, username: string ) {
  session.voters.push(username)
  }

  userHasVoted(session: MySession, username: string ) {
  return session.voters.some(voter=>voter===username)
  }
}
