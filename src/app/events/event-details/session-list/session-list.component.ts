import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MySession} from "../../../models/mySession";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit,OnChanges{
  visibleSessions:MySession[] =[]
 @Input() sessions:MySession[] | undefined=[]
  @Input() filterBy:string=""
  @Input() sortBy:string=""
  constructor() { }

  ngOnInit(): void {
  }
  //svaki put kada input varijabla dobije novu vrednost
  ngOnChanges(changes: SimpleChanges) {
    if(this.sessions){
      this.filterSessions(this.filterBy)
      this.sortBy=='name'? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc)
    }
  }
  sortByNameAsc(s1:MySession,s2:MySession){
  if(s1.name>s2.name) return 1
    else if (s1.name===s2.name) return 0
  return -1
  }
  sortByVotesDesc(s1:MySession,s2:MySession){
    if(s1.voters.length>s2.voters.length) return 1
    else if (s1.voters.length===s2.voters.length) return 0
    return -1
  }

  private filterSessions(filterBy: string) {
    if(filterBy==="all"){
      //pravi duplikat od 0
      this.visibleSessions=this.sessions?.slice(0)!
    }else{

        this.visibleSessions=this.sessions?.filter(session=>session.level.toLocaleLowerCase()===filterBy)!

    }
  }
}
