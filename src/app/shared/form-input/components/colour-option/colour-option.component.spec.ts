import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourOptionComponent } from './colour-option.component';

describe('ColourOptionComponent', () => {
  let component: ColourOptionComponent;
  let fixture: ComponentFixture<ColourOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
