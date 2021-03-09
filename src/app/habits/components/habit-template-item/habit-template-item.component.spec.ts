import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitTemplateItemComponent } from './habit-template-item.component';

describe('HabitTemplateItemComponent', () => {
  let component: HabitTemplateItemComponent;
  let fixture: ComponentFixture<HabitTemplateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitTemplateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
