import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelozesComponent } from './velozes.component';

describe('VelozesComponent', () => {
  let component: VelozesComponent;
  let fixture: ComponentFixture<VelozesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelozesComponent]
    });
    fixture = TestBed.createComponent(VelozesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
