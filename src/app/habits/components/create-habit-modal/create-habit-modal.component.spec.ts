import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHabitModalComponent } from './create-habit-modal.component';

describe('CreateHabitModalComponent', () => {
  let component: CreateHabitModalComponent;
  let fixture: ComponentFixture<CreateHabitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHabitModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHabitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
