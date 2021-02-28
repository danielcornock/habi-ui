import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourPickerControlComponent } from './colour-picker-control.component';

describe('ColourPickerControlComponent', () => {
  let component: ColourPickerControlComponent;
  let fixture: ComponentFixture<ColourPickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourPickerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourPickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
