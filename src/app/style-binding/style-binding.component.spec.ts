import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingComponent } from './style-binding.component';

describe('StyleBindingComponent', () => {
  let component: StyleBindingComponent;
  let fixture: ComponentFixture<StyleBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleBindingComponent]
    });
    fixture = TestBed.createComponent(StyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
