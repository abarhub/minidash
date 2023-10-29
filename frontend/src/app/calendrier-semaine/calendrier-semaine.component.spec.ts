import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierSemaineComponent } from './calendrier-semaine.component';

describe('CalendrierSemaineComponent', () => {
  let component: CalendrierSemaineComponent;
  let fixture: ComponentFixture<CalendrierSemaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierSemaineComponent]
    });
    fixture = TestBed.createComponent(CalendrierSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
