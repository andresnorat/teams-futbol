import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTeamDTO, Team, UpdateTeamDTO } from '../models/team.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballTeamsService {

  constructor(
    private http: HttpClient
  ) { }

  apiURL = 'https://wo-fifa.azurewebsites.net/equipos'

  getTeams(){
    return this.http.get<{content:[]}>(`${this.apiURL}/listar/0/100`);  
  }

  getTeam(id:string){
    return this.http.get<Team>(`${this.apiURL}/consultar/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === HttpStatusCode.NotFound){
          return throwError(`No se encontro el equipo con el Id ${id}`);
        }
        return throwError('Upps erre')
      })
    )
  }


  createTeam(dto:CreateTeamDTO){
    return this.http.post<Team>(`${this.apiURL}/crear`, dto);
  }


  update(id: string, dto: UpdateTeamDTO){
    return this.http.put<Team>(`${this.apiURL}/actualizar/${id}`, dto);
  }


  delete(id: number){
    return this.http.delete(`${this.apiURL}/eliminar/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === HttpStatusCode.Unauthorized){
          return throwError('Unauthorized')
        }
        return throwError('Upps erre')
      })
    )
  }

  getFilteredData(startDate: string, endDate: string){
    return this.http.get<Team[]>(`${this.apiURL}/consultar/${startDate}/${endDate}/`);
  }

}
