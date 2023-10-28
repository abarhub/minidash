import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horloge2Component } from './horloge2.component';

describe('Horloge2Component', () => {
  let component: Horloge2Component;
  let fixture: ComponentFixture<Horloge2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Horloge2Component]
    });
    fixture = TestBed.createComponent(Horloge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
