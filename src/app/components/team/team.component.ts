import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  constructor(
  ) { }

  @Output() teamId =  new EventEmitter<number>();

  @Input() showDelete: boolean =  true;
  @Input() team: Team = {
    id: 0,
    nombre: '',
    estadio: '',
    sitioWeb: null,
    nacionalidad: '',
    fundacion: '',
    entrenador: '',
    capacidad: 0,
    valor: null,
  }


  deleteTeam(id: number) {
    this.teamId.emit(id);
  }
}
