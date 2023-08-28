import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosComponent } from './caros.component';

describe('CarosComponent', () => {
  let component: CarosComponent;
  let fixture: ComponentFixture<CarosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarosComponent]
    });
    fixture = TestBed.createComponent(CarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
