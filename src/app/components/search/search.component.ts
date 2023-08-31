import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { FootballTeamsService } from 'src/app/services/football-teams.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() teamId = new EventEmitter<number>();

  searchField = new FormControl();
  showTeam = false;
  messageError = '';
  team: Team = {
    id: 0,
    nombre: '',
    estadio: '',
    sitioWeb: null,
    nacionalidad: '',
    fundacion: '',
    entrenador: '',
    capacidad: 0,
    valor: null,
  };

  constructor(
    private footballTeamsService: FootballTeamsService
  ) { }

  ngOnInit() {
    this.searchField.valueChanges.pipe(
      debounceTime(300))
      .subscribe(values => {
        this.footballTeamsService.getTeam(values)
          .subscribe({
            next: (value) => {
              this.team = value;
              this.showTeam = true;
            },
            error: (error) => {
              this.showTeam = false;
              this.messageError = error;
              if (this.searchField.value === '') {
                this.messageError = ''
              }
            }
          });
      })
  }

  deleteItem(id: number) {
    this.teamId.emit(id);
    this.showTeam = false;
    this.messageError = '';
    this.searchField.setValue('');
  }
}