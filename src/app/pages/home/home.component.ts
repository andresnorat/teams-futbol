import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { FootballTeamsService } from 'src/app/services/football-teams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private footballTeamsService: FootballTeamsService
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  deleteTeam(id: number) {
    this.footballTeamsService.delete(id).subscribe({
      next: () => {
        this.getTeams();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


  getTeams() {
    this.footballTeamsService.getTeams()
      .subscribe({
        next: (values) => {
          this.teams = values.content;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }


}
