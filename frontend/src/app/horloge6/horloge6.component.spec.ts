import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horloge6Component } from './horloge6.component';

describe('Horloge6Component', () => {
  let component: Horloge6Component;
  let fixture: ComponentFixture<Horloge6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Horloge6Component]
    });
    fixture = TestBed.createComponent(Horloge6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
