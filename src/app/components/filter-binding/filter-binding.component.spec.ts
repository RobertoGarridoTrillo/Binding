import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBindingComponent } from './filter-binding.component';

describe('FilterBindingComponent', () => {
  let component: FilterBindingComponent;
  let fixture: ComponentFixture<FilterBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
