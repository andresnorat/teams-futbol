import { Component, EventEmitter, Output } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { FootballTeamsService } from 'src/app/services/football-teams.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent {



  startDate: string = '';
  endDate: string = '';
  filteredItems: string[] = [];
  teams: Team[] = [];



  constructor(
    private footballTeamsService: FootballTeamsService
  ) { }

  filterByDate() {
    const formattedStartDate = this.formatDate(this.startDate);
    const formattedEndDate = this.formatDate(this.endDate);
    
    this.footballTeamsService.getFilteredData(formattedStartDate, formattedEndDate)
        .subscribe({
          next: (values) => {
            this.teams = values;
          },
          error: (error) => {
            console.log(error);
          }
        })
  }

  formatDate(date: string): string {
    const partes = date.split('-');
    const fechaInvertida = partes.reverse().join('-');
    return fechaInvertida;
  }

  cleanByTeams(){
    this.startDate = '',
    this.endDate = '';
    this.teams = [];
  }
}


