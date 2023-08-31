import { TestBed } from '@angular/core/testing';

import { FootballTeamsService } from './football-teams.service';

describe('FootballTeamsService', () => {
  let service: FootballTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
