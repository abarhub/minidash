import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisionMeteoComponent } from './prevision-meteo.component';

describe('PrevisionMeteoComponent', () => {
  let component: PrevisionMeteoComponent;
  let fixture: ComponentFixture<PrevisionMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevisionMeteoComponent]
    });
    fixture = TestBed.createComponent(PrevisionMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
