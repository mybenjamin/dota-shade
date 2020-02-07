import { TestBed } from '@angular/core/testing';

import { PlayerSelectorService } from './player-selector.service';

describe('PlayerSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerSelectorService = TestBed.get(PlayerSelectorService);
    expect(service).toBeTruthy();
  });
});
