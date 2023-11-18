import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horloge3Component } from './horloge3.component';

describe('Horloge3Component', () => {
  let component: Horloge3Component;
  let fixture: ComponentFixture<Horloge3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Horloge3Component]
    });
    fixture = TestBed.createComponent(Horloge3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
