import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterPolationComponent } from './inter-polation.component';

describe('InterPolationComponent', () => {
  let component: InterPolationComponent;
  let fixture: ComponentFixture<InterPolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterPolationComponent]
    });
    fixture = TestBed.createComponent(InterPolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
