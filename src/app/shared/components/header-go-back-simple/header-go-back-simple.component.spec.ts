import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGoBackSimpleComponent } from './header-go-back-simple.component';

describe('HeaderGoBackSimpleComponent', () => {
  let component: HeaderGoBackSimpleComponent;
  let fixture: ComponentFixture<HeaderGoBackSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderGoBackSimpleComponent]
    });
    fixture = TestBed.createComponent(HeaderGoBackSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
