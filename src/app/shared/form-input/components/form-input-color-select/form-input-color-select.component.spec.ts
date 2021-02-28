import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputColorSelectComponent } from './form-input-color-select.component';

describe('FormInputColorSelectComponent', () => {
  let component: FormInputColorSelectComponent;
  let fixture: ComponentFixture<FormInputColorSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputColorSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputColorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
