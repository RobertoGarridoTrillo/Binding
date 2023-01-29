import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolacionComponent } from './string-interpolacion.component';

describe('StringInterpolacionComponent', () => {
  let component: StringInterpolacionComponent;
  let fixture: ComponentFixture<StringInterpolacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpolacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInterpolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
