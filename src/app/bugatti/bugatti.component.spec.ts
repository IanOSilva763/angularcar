import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiComponent } from './bugatti.component';

describe('BugattiComponent', () => {
  let component: BugattiComponent;
  let fixture: ComponentFixture<BugattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugattiComponent]
    });
    fixture = TestBed.createComponent(BugattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
