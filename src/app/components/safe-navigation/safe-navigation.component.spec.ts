import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNavigationComponent } from './safe-navigation.component';

describe('SafeNavigationComponent', () => {
  let component: SafeNavigationComponent;
  let fixture: ComponentFixture<SafeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
