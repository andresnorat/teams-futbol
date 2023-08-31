export interface Team {
    id: number;
    nombre: string;
    estadio : string;
    sitioWeb : null;
    nacionalidad : string;
    fundacion : string;
    entrenador: string;
    capacidad: number;
    valor: null;
}

export interface CreateTeamDTO extends Omit<Team, 'id'> {}
export interface UpdateTeamDTO extends Partial<CreateTeamDTO>{}
