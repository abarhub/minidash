import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horloge4Component } from './horloge4.component';

describe('Horloge4Component', () => {
  let component: Horloge4Component;
  let fixture: ComponentFixture<Horloge4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Horloge4Component]
    });
    fixture = TestBed.createComponent(Horloge4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
