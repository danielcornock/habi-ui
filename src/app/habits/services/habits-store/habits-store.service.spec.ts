import { TestBed } from '@angular/core/testing';

import { HabitsStoreService } from './habits-store.service';

describe('HabitsStoreService', () => {
  let service: HabitsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
