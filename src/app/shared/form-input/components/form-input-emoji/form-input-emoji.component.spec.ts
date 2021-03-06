import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputEmojiComponent } from './form-input-emoji.component';

describe('FormInputEmojiComponent', () => {
  let component: FormInputEmojiComponent;
  let fixture: ComponentFixture<FormInputEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputEmojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
