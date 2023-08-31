import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  @Output() teamId =  new EventEmitter<number>();
  @Output() teamIdSearch =  new EventEmitter<number>();
  @Input() teams: Team[] = [];



  deleteTeam(id: number){
    this.teamId.emit(id);
  }

  deleteTeamSearch(id: number){
    this.teamIdSearch.emit(id);
  }

}
