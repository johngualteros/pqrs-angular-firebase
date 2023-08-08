import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPqrsComponent } from './register-pqrs.component';

describe('RegisterPqrsComponent', () => {
  let component: RegisterPqrsComponent;
  let fixture: ComponentFixture<RegisterPqrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPqrsComponent]
    });
    fixture = TestBed.createComponent(RegisterPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
