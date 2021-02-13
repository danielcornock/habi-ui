import { TestBed } from '@angular/core/testing';

import { HabitsApiService } from './habits-api.service';

describe('HabitsApiService', () => {
  let service: HabitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
