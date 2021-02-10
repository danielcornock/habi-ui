import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHabitComponent } from './daily-habit.component';

describe('DailyHabitComponent', () => {
  let component: DailyHabitComponent;
  let fixture: ComponentFixture<DailyHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHabitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
