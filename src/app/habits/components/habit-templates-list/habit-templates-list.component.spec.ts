import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitTemplatesListComponent } from './habit-templates-list.component';

describe('HabitTemplatesListComponent', () => {
  let component: HabitTemplatesListComponent;
  let fixture: ComponentFixture<HabitTemplatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitTemplatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
