import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FootballTeamsService } from 'src/app/services/football-teams.service';

@Component({
  selector: 'app-team-forms',
  templateUrl: './team-forms.component.html',
  styleUrls: ['./team-forms.component.css']
})
export class TeamFormsComponent implements OnInit {

  formTeam!: FormGroup;
  teamId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private footballTeamsService: FootballTeamsService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.teamId = id;
      if (this.teamId) {
        this.getTeam();
      }
    })
  }


  buildForm() {
    this.formTeam = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      estadio: ['', [Validators.required]],
      sitioWeb: [''],
      nacionalidad: ['', [Validators.required]],
      fundacion: ['', [Validators.required]],
      entrenador: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      valor: [null],
    });
  }


  save() {
    if (this.formTeam.valid) {

      if (this.teamId) {
        this.updateTeam();
      } else {
        this.createTeam();
      }
    } else {
      this.formTeam.markAllAsTouched();
    }
  }

  private createTeam() {
    this.footballTeamsService.createTeam(this.formTeam.value)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error)
        }
      })
  }


  private updateTeam() {
    const data = this.formTeam.value;
    this.footballTeamsService.update(this.teamId, data).
      subscribe({
        next: () => {
          this.router.navigate(['/home']);
        }
      })
  }

  private getTeam() {
    this.footballTeamsService.getTeam(this.teamId)
      .subscribe({
        next: (value) => {
          this.formTeam.patchValue(value);
        }
      })
  }


  get nombre() {
    return this.formTeam.get('nombre');
  }

  get estadio() {
    return this.formTeam.get('estadio');
  }

  get sitioWeb() {
    return this.formTeam.get('sitioWeb');
  }

  get nacionalidad() {
    return this.formTeam.get('nacionalidad');
  }

  get fundacion() {
    return this.formTeam.get('fundacion');
  }

  get entrenador() {
    return this.formTeam.get('entrenador');
  }

  get capacidad() {
    return this.formTeam.get('capacidad');
  }

  get valor() {
    return this.formTeam.get('valor');
  }
}
